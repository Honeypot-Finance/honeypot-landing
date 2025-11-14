# Navbar API

This API endpoint provides the navbar configuration data that can be shared across different repositories and applications.

## Endpoint

```
GET /api/navbar
```

## Response Format

```typescript
type Menu = {
  path:
    | string
    | Array<{
        path: string;
        title: string;
        routePath: string;
        icon?: StaticImageData;
        external?: boolean;
        beforeElement?: ReactNode;
        afterElement?: ReactNode;
      }>;
  title: string;
  routePath?: string;
  icon?: StaticImageData;
  external?: boolean;
  beforeElement?: ReactNode;
  afterElement?: ReactNode;
};

interface NavbarResponse {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menu: Menu[];
}
```

## Example Response

```json
{
  "logo": {
    "src": "/logo.svg",
    "alt": "Honeypot Finance Logo",
    "width": 100,
    "height": 100
  },
  "menu": [
    {
      "title": "Trade",
      "path": [
        {
          "title": "Perp",
          "path": "https://dex.honeypotfinance.xyz/perp",
          "routePath": "https://dex.honeypotfinance.xyz/perp",
          "external": true
        },
        {
          "title": "Swap",
          "path": "https://dex.honeypotfinance.xyz/swap",
          "routePath": "https://dex.honeypotfinance.xyz/swap",
          "external": true
        }
      ]
    },
    {
      "title": "Earn",
      "path": [
        {
          "title": "Points",
          "path": "https://points.honeypotfinance.xyz/loyalty",
          "routePath": "https://points.honeypotfinance.xyz/loyalty",
          "external": true
        }
      ]
    },
    {
      "title": "Docs",
      "path": "https://docs.honeypotfinance.xyz/",
      "external": true
    }
  ]
}
```

## Usage

### In React/Next.js

```typescript
import { useEffect, useState } from "react";

type Menu = {
  path:
    | string
    | Array<{
        path: string;
        title: string;
        routePath: string;
        external?: boolean;
      }>;
  title: string;
  routePath?: string;
  external?: boolean;
};

interface NavbarConfig {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  menu: Menu[];
}

export function useNavbarConfig() {
  const [config, setConfig] = useState<NavbarConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://honeypotfinance.xyz/api/navbar")
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load navbar config:", err);
        setLoading(false);
      });
  }, []);

  return { config, loading };
}
```

### Direct Fetch

```typescript
const response = await fetch("https://honeypotfinance.xyz/api/navbar");
const navbarConfig = await response.json();
```

## Caching

The endpoint is configured with the following cache headers:

- `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`
- Static generation enabled for optimal performance

## Menu Structure

The menu supports both simple links and nested dropdown menus:

- **Simple link**: Menu item with `path` as a string (e.g., Docs)
- **Dropdown menu**: Menu item with `path` as an array of submenu items (e.g., Trade, Earn)

Each menu item can have:

- `title`: Display text for the menu item
- `path`: URL string or array of submenu items
- `routePath`: Used for routing (in submenu items)
- `external`: Boolean indicating if link opens in new tab

## Configuration

To modify the navbar items, edit `/src/config/allAppPath.tsx` in this repository. The API endpoint automatically reads from this configuration file.
