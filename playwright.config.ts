import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './apps/web/tests',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:5173' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});

