
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "anyone can submit"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (
    char_length(name) between 1 and 200
    and char_length(phone) between 1 and 50
    and (message is null or char_length(message) <= 5000)
  );
