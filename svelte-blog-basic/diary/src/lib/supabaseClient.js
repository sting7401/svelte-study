import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nfwhzuyhgmtjrhftgkxz.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5md2h6dXloZ210anJoZnRna3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3MDkwOTksImV4cCI6MjA0MjI4NTA5OX0.lUbuvW2qwSZGgLFlZ0wzq1f6ZEzzcgJskfls7SiGSI8';
export const supabase = createClient(supabaseUrl, `${supabaseKey}`);
