# Admin Panel - Design System & Component Guide

## 🎨 Design Tokens

### Color System

```
Primary Actions (Blue):
  - Blue 500: #3b82f6 - Hover/Active state
  - Blue 600: #2563eb - Base button/primary actions
  - Blue 50: #eff6ff - Light background

Secondary Actions (Purple):
  - Purple 500: #a855f7 - Hover/Active state
  - Purple 600: #9333ea - Base button/secondary actions
  - Purple 50: #faf5ff - Light background

Danger Actions (Red):
  - Red 500: #ef4444 - Hover/Active state
  - Red 600: #dc2626 - Base button/delete actions
  - Red 50: #fef2f2 - Light background

Success States (Green):
  - Green 500: #10b981 - Hover/Active state
  - Green 600: #059669 - Base success
  - Green 50: #f0fdf4 - Light background

Neutral (Gray):
  - Gray 50: #f9fafb - Background
  - Gray 100: #f3f4f6 - Secondary background
  - Gray 200: #e5e7eb - Borders
  - Gray 400: #9ca3af - Disabled text
  - Gray 600: #4b5563 - Secondary text
  - Gray 900: #111827 - Primary text
```

### Typography

```
Headings:
  - h1: 2.25rem (36px) - font-bold
  - h2: 1.875rem (30px) - font-bold
  - h3: 1.5rem (24px) - font-bold
  - h4: 1.25rem (20px) - font-semibold

Body:
  - lg: 1.125rem (18px) - font-normal
  - base: 1rem (16px) - font-normal
  - sm: 0.875rem (14px) - font-normal
  - xs: 0.75rem (12px) - font-normal

Weights:
  - Bold: 700 (headings)
  - Semibold: 600 (labels, emphasis)
  - Normal: 400 (body text)
```

### Spacing

```
Base Unit: 4px (Tailwind)
  - 1 = 4px
  - 2 = 8px
  - 3 = 12px
  - 4 = 16px
  - 6 = 24px
  - 8 = 32px
  - 12 = 48px

Common Patterns:
  - Form fields padding: py-3 (12px vertical, 16px horizontal)
  - Card padding: p-6 or p-8 (24px or 32px)
  - Section gaps: gap-6 or gap-8
```

### Border Radius

```
  - Small: rounded - 4px
  - Medium: rounded-lg - 8px
  - Large: rounded-xl - 12px
```

### Shadows

```
  - Light: shadow-sm - 0 1px 2px
  - Medium: shadow-md - 0 4px 6px
  - Large: shadow-lg - 0 10px 15px
  - XL: shadow-xl - 0 20px 25px
  - 2XL: shadow-2xl - 0 25px 50px
```

### Transitions

```
  - Quick: 200ms - hover states, focus
  - Normal: 300ms - modal entrance, page transitions
  - Ease: cubic-bezier(0.4, 0, 0.2, 1) - default
```

---

## 📦 Component Library

### Buttons

#### Primary Button
```jsx
<button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200">
  Primary Action
</button>
```
**Usage**: Main CTA, form submission, create actions

#### Secondary Button
```jsx
<button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-200">
  Secondary Action
</button>
```
**Usage**: Cancel, back, secondary options

#### Danger Button
```jsx
<button className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-200 font-medium text-sm">
  Delete
</button>
```
**Usage**: Delete, remove, dangerous actions

#### Icon Button
```jsx
<button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
  <Icon size={20} />
</button>
```
**Usage**: Small actions, toggles, navigation

### Inputs & Forms

#### Text Input
```jsx
<input 
  type="text"
  placeholder="Placeholder text"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
/>
```

#### Input with Icon
```jsx
<div className="relative">
  <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
  <input 
    type="email"
    placeholder="Email"
    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
```

#### Textarea
```jsx
<textarea
  placeholder="Description"
  rows={5}
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
/>
```

#### File Upload
```jsx
<label className="block cursor-pointer">
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 hover:bg-blue-50 transition-all">
    <Upload size={32} className="text-gray-400 mx-auto mb-2" />
    <p>Click to upload or drag and drop</p>
  </div>
  <input type="file" className="hidden" />
</label>
```

### Cards

#### Stat Card
```jsx
<div className="bg-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
  <div className="flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-600">Label</p>
      <p className="text-3xl font-bold text-gray-900">123</p>
    </div>
    <Icon size={24} className="text-blue-600" />
  </div>
</div>
```

#### Action Card
```jsx
<a href="#" className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all">
  <Icon size={28} className="text-blue-600 mb-3" />
  <h3 className="font-semibold text-gray-900">Title</h3>
  <p className="text-sm text-gray-600 mt-1">Description</p>
</a>
```

#### Member Card (Grid)
```jsx
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
  <img src="" className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3 className="text-lg font-bold text-gray-900">Name</h3>
    <p className="text-sm text-gray-600">Role</p>
  </div>
</div>
```

### Tables

#### Table Header
```jsx
<thead>
  <tr className="border-b border-gray-200 bg-gray-50">
    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Column</th>
  </tr>
</thead>
```

#### Table Row
```jsx
<tbody className="divide-y divide-gray-200">
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-4">Content</td>
  </tr>
</tbody>
```

### Alerts & Notifications

#### Error Alert
```jsx
<div className="p-4 rounded-lg bg-red-50 border border-red-200 flex gap-3">
  <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
  <p className="text-red-700">Error message</p>
</div>
```

#### Success Alert
```jsx
<div className="p-4 rounded-lg bg-green-50 border border-green-200 flex gap-3">
  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
  <p className="text-green-700">Success message</p>
</div>
```

### Loading States

#### Loading Spinner
```jsx
<Loader size={32} className="text-blue-600 animate-spin" />
```

#### Loading with Text
```jsx
<div className="flex gap-2">
  <Loader size={20} className="animate-spin" />
  <span>Loading...</span>
</div>
```

### Empty States

```jsx
<div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
  <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
  <h3 className="text-xl font-semibold text-gray-900 mb-2">No items</h3>
  <p className="text-gray-600 mb-6">Create your first item to get started</p>
  <button>Create Item</button>
</div>
```

---

## 🎯 Common Patterns

### Form Section
```jsx
<form className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
  <div className="space-y-6">
    {/* Form fields */}
  </div>
</form>
```

### List Header with Action
```jsx
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  <div>
    <h1 className="text-3xl font-bold text-gray-900">Title</h1>
    <p className="text-gray-600 mt-1">Description</p>
  </div>
  <button>Action Button</button>
</div>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (...))}
</div>
```

### Header with Breadcrumb
```jsx
<div className="mb-8 flex items-center gap-3">
  <button onClick={goBack}>← Back</button>
  <div>
    <h1>Page Title</h1>
    <p>Description</p>
  </div>
</div>
```

---

## ♿ Accessibility Checklist

- [ ] All interactive elements have focus rings
- [ ] Color is not the only indicator of status
- [ ] Text contrast is 4.5:1 minimum
- [ ] Form labels are associated with inputs
- [ ] Error messages are descriptive
- [ ] Loading states are announced
- [ ] Images have alt text
- [ ] Keyboard navigation works
- [ ] ARIA labels on icon-only buttons

---

## 📱 Responsive Breakpoints

```
sm:  640px  - Tablets
md:  768px  - Small laptops
lg:  1024px - Desktop
xl:  1280px - Large desktop
2xl: 1536px - Extra large
```

**Pattern**: Mobile first, then enhance with media queries

---

## 🎬 Transitions & Animations

```
Default Transition:
  transition-all duration-200

Hover Effects:
  - Shadow increase
  - Border color change
  - Scale (very subtle)
  - Opacity shift

Loading Animation:
  animate-spin

Fade In:
  opacity-0 → opacity-100
```

---

## 🔗 Component Relationships

```
AdminLayout
├── AdminDashboard
├── AdminCourses (table)
│   ├── AddCourse (form)
│   └── EditCourse (form)
└── AdminTeam (grid)
    └── AddTeamMember (form)
```

---

## 📦 Dependencies

- **React**: UI framework
- **react-router-dom**: Routing
- **Tailwind CSS**: Styling
- **lucide-react**: Icons

---

## 🚀 Performance Tips

1. Use CSS transitions instead of animations
2. Lazy load images
3. Memoize components if needed
4. Use event delegation for lists
5. Debounce search/filter inputs

---

## 🔐 Form Security

- Validate on both client and server
- Use proper HTTP methods (POST, PUT, DELETE)
- Include CSRF tokens if needed
- Never expose sensitive data in URLs
- Sanitize user inputs

---

## 📝 Code Style Guide

### Naming Conventions
- Components: PascalCase (AdminLayout.jsx)
- Functions: camelCase (handleSubmit)
- Constants: UPPER_SNAKE_CASE (API_URL)
- Classes: camelCase or kebab-case (for Tailwind)

### Component Structure
1. Imports
2. Component function definition
3. State declarations
4. Effect hooks
5. Event handlers
6. Render logic
7. Export

### File Organization
```
Admin/
├── Components/
│   └── AdminLayout.jsx
├── Pages/
│   ├── AdminLogin.jsx
│   ├── AdminDashboard.jsx
│   ├── AdminCourses.jsx
│   ├── AddCourse.jsx
│   ├── EditCourse.jsx
│   ├── AdminTeam.jsx
│   └── AddTeamMember.jsx
├── Services/
│   └── adminAuth.js
├── AdminRoutes.jsx
└── ADMIN_PANEL_IMPROVEMENTS.md
```

---

**Last Updated**: January 29, 2026
**Version**: 1.0
**Status**: Production Ready ✅
