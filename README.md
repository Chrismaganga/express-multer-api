# Express Image Upload API

A TypeScript-based Express API for image uploads using Multer and Supabase storage.

## Features

- Image upload with metadata (name, description, creation date)
- File type validation
- Size limits
- Supabase PostgreSQL integration
- TypeScript support
- Jasmine tests

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory with your Supabase credentials:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

3. Create the uploads directory:

```bash
mkdir uploads
```

4. Create the following table in your Supabase database:

```sql
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    filename VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Development

Run the development server:

```bash
npm run dev
```

## Testing

Run tests:

```bash
npm test
```

## Build

Build for production:

```bash
npm run build
```

## API Endpoints

```
- `POST /api/upload` - Upload an image with metadata
- `GET /api/images` - Get all images
```
