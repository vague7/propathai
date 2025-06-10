# ProPathAI

ProPathAI is an intelligent career development platform designed to assist users in advancing their professional journey. It leverages AI to provide personalized resume building, cover letter generation, interview preparation, and industry insights.

## Key Features

*   **AI-Powered Resume Builder**:
    *   Create and manage resumes using a form-based input or a Markdown editor.
    *   Utilize AI to improve resume sections (summary, experience, education, projects).
    *   Download resumes as PDF.
*   **AI Cover Letter Generator**:
    *   Automatically generate tailored cover letters based on your profile and specific job descriptions.
*   **Intelligent Interview Preparation**:
    *   Practice with mock technical quizzes customized to your industry and skills.
    *   Receive detailed feedback, explanations, and AI-generated improvement tips.
    *   Track your performance over time with visual charts and statistics.
*   **Industry Insights Dashboard**:
    *   Access real-time data on salary ranges, industry growth rates, demand levels, and top skills.
    *   Stay informed about key market trends and recommended skills for your chosen field.
    *   Insights are automatically updated weekly.
*   **Personalized Onboarding**:
    *   Tailor the platform's guidance by providing your industry, specialization, experience, and skills.
*   **Secure User Authentication**:
    *   Managed by Clerk for secure sign-up, sign-in, and user management.

## Tech Stack

*   **Frontend**: Next.js (App Router with Turbopack), React, Tailwind CSS
*   **UI Components**: Shadcn UI, Radix UI
*   **State Management & Forms**: React Hook Form, Zod (for validation)
*   **AI Integration**: Google Generative AI (Gemini)
*   **Backend/Database**: Prisma ORM, PostgreSQL
*   **Authentication**: Clerk
*   **Background Jobs/Scheduled Tasks**: Inngest
*   **Styling**: Tailwind CSS, PostCSS
*   **Linting**: ESLint
*   **PDF Generation**: jsPDF, jspdf-autotable
*   **Charting**: Recharts

## Project Structure

*   `actions/`: Server-side Next.js actions for data fetching, AI interactions, and database mutations.
*   `app/`: Main Next.js application directory using the App Router.
    *   `(auth)/`: Authentication-related pages (sign-in, sign-up).
    *   `(main)/`: Core application routes like dashboard, resume builder, interview prep, cover letter generator, and onboarding.
    *   `api/`: API routes, including the Inngest event handler.
    *   `lib/`: Shared utility functions and schema definitions (Zod).
*   `components/`: Reusable React components, including UI elements from Shadcn UI.
*   `data/`: Static data for the landing page (FAQs, features, testimonials, industry lists).
*   `hooks/`: Custom React hooks (e.g., `use-fetch` for API calls).
*   `lib/`: Global utility functions, Prisma client setup, Inngest client/functions, Clerk user management.
*   `prisma/`: Prisma schema (`schema.prisma`) and database migrations.
*   `public/`: Static assets like images and favicons.

## Getting Started

Follow these instructions to set up and run the ProPathAI project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm, yarn, pnpm, or bun
*   PostgreSQL database

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```env
# Prisma
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"

# Google Generative AI
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Inngest (Optional for local development if not testing cron jobs)
INNGEST_EVENT_KEY="YOUR_INNGEST_EVENT_KEY" # if you plan to send events from outside your app
# INNGEST_SIGNING_KEY="YOUR_INNGEST_SIGNING_KEY" # if you protect your Inngest endpoint
```

Replace placeholder values with your actual credentials.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/vague7/propathai.git
    cd propathai
    ```

2.  Install dependencies (choose your preferred package manager):
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Database Setup

1.  Ensure your PostgreSQL server is running and you have created a database for this project.
2.  Generate Prisma Client:
    ```bash
    npx prisma generate
    ```
    (This step is also run automatically after `npm install` due to the `postinstall` script in `package.json`).

3.  Apply database migrations:
    ```bash
    npx prisma migrate dev
    ```
    This will create the necessary tables in your database based on the `prisma/schema.prisma` file.

### Running the Development Server

Once the installation and database setup are complete, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will typically be available at `http://localhost:3000`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
