# Routing Configuration

## Overview
This document explains the routing setup for the portfolio application.

## Route Structure

```
/                      →  redirects to  →  /three-d
/three-d              →  displays ThreeD component
```

## Configuration Details

### File: `src/app/app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { ThreeD } from './three-d/three-d';

export const routes: Routes = [
  { path: 'three-d', component: ThreeD },
  { path: '', redirectTo: '/three-d', pathMatch: 'full' }
];
```

## Route Definitions

### 1. Three-D Route
- **Path**: `/three-d`
- **Component**: `ThreeD`
- **Description**: Displays the 3D visualization component

### 2. Default Route (Root)
- **Path**: `/` (empty path)
- **Action**: Redirects to `/three-d`
- **Match Type**: `full` (exact path match required)
- **Description**: When users visit the root URL, they are automatically redirected to the three-d component

## How It Works

1. User navigates to `http://localhost:4200/`
2. Angular router matches the empty path `''`
3. Router redirects to `/three-d` (due to `redirectTo: '/three-d'`)
4. Router matches `/three-d` path
5. ThreeD component is loaded into the `<router-outlet />` in the app template

## Adding New Routes

To add a new route, add a new route object to the `routes` array:

```typescript
export const routes: Routes = [
  { path: 'three-d', component: ThreeD },
  { path: 'your-path', component: YourComponent },  // New route
  { path: '', redirectTo: '/three-d', pathMatch: 'full' }
];
```

Remember to import the component at the top of the file:

```typescript
import { YourComponent } from './your-component/your-component';
```
