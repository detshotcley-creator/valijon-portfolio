-- Run this once in Supabase: SQL Editor > New query.
-- Keep Row Level Security enabled: visitors may read entries, but only the owner can add them.

create table if not exists public.portfolio_entries (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('project', 'achievement')),
  title text not null check (char_length(title) <= 80),
  description text not null check (char_length(description) <= 360),
  technologies text[] not null default '{}',
  link text,
  created_at timestamptz not null default now()
);

alter table public.portfolio_entries enable row level security;

create policy "Anyone can read public portfolio entries"
on public.portfolio_entries for select
to anon, authenticated
using (true);

create policy "Only Valijon may add or change entries"
on public.portfolio_entries for all
to authenticated
using ((auth.jwt() ->> 'email') = 'detshotcley@gmail.com')
with check ((auth.jwt() ->> 'email') = 'detshotcley@gmail.com');
