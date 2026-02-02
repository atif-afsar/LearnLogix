# Admin Panel - Quick Start Guide

## 🚀 Getting Started

### 1. Installation & Setup

```bash
# Install dependencies (if not already done)
cd Frontend
npm install

# Make sure these packages are installed:
npm install lucide-react
npm install @tailwindcss/vite
```

### 2. Start Development Server

```bash
cd Frontend
npm run dev
```

The admin panel will be available at: `https://learnlogix-frontend.vercel.app/admin`

### 3. Login Credentials

Use your admin credentials to access the dashboard:
- Email: `admin@example.com` (or your setup email)
- Password: Your admin password

---

## 📖 Page Navigation

### Dashboard Structure

```
/admin/login
  └─ Login page (public)

/admin (protected)
  ├─ /dashboard
  │  └─ Overview page with stats
  ├─ /courses
  │  ├─ List all courses (table view)
  │  ├─ /add
  │  │  └─ Create new course
  │  └─ /edit/:id
  │     └─ Edit course details
  └─ /team
     ├─ List all team members (grid view)
     └─ /add
        └─ Add new team member
```

---

## 🎯 Common Tasks

### Adding a New Course

1. Go to **Dashboard** → Click "Add Course" (quick action)
2. Or navigate to **Courses** → Click "Add Course" button
3. Fill in:
   - **Course Title** (required)
   - **Course Description** (required)
   - **Price** in ₹ (required)
   - **Course Image** (optional)
4. Click **"Create Course"** button
5. Redirected to courses list after success

### Editing a Course

1. Go to **Courses** list
2. Find the course you want to edit
3. Click **Edit** button (blue button with pencil icon)
4. Update the details
5. Click **"Save Changes"** button

### Deleting a Course

1. Go to **Courses** list
2. Click **Delete** button (red button with trash icon)
3. Confirm the deletion dialog
4. Course is removed from the list

### Adding a Team Member

1. Go to **Dashboard** → Click "Add Team Member" (quick action)
2. Or navigate to **Team Members** → Click "Add Member" button
3. Fill in:
   - **Full Name** (required)
   - **Role/Position** (required)
   - **Profile Image** (required)
4. Click **"Add Member"** button
5. Redirected to team list after success

### Deleting a Team Member

1. Go to **Team Members** (grid view)
2. Find the member card
3. Click **Delete** button on the card
4. Confirm the deletion dialog
5. Member is removed from the list

---

## 🎨 Styling & Customization

### Change Primary Color (Blue to Your Color)

Open each component file and replace:

```jsx
// In AdminLayout.jsx
from-blue-500 to-blue-600
focus:ring-blue-500
text-blue-600
bg-blue-50

// With your color (e.g., Indigo)
from-indigo-500 to-indigo-600
focus:ring-indigo-500
text-indigo-600
bg-indigo-50
```

### Add a Custom Color Scheme

Update your Tailwind config or use custom CSS:

```jsx
// Example: Custom brand color
className="from-brand-500 to-brand-600"
```

### Adjust Spacing

Increase padding globally:
```jsx
p-6 → p-8  // More breathing room
p-4 → p-6  // Slightly more padding
```

---

## 🔧 Troubleshooting

### Issue: Admin Panel Not Loading

**Solution**:
1. Check if backend is running (`npm run dev` in Backend folder)
2. Verify API URL: `https://learnlogix-backend.onrender.com` in component files
3. Check browser console for errors (F12)
4. Ensure you're logged in (token in localStorage)

### Issue: Images Not Uploading

**Solution**:
1. Check file size (max 5MB)
2. Verify file format (PNG, JPG, GIF)
3. Check backend file upload endpoint
4. Check browser console for error details

### Issue: Styles Not Applying

**Solution**:
1. Rebuild Tailwind: `npm run build`
2. Clear browser cache (Ctrl+Shift+Delete)
3. Check if Tailwind is configured in `vite.config.js`
4. Verify class names are spelled correctly

### Issue: API Errors

**Solution**:
1. Check backend is running
2. Verify API endpoints match backend routes
3. Check Authorization token in localStorage
4. Review backend logs for errors

---

## 📊 Component API Reference

### AdminLayout Props
```jsx
No props - Uses Context/Router
```

### Form Components

#### AddCourse
- Validates title, description, price
- Accepts image file (optional)
- Redirects to /admin/courses on success

#### EditCourse
- Requires course ID from URL params
- Pre-fills form with existing data
- Updates via PUT request

#### AddTeamMember
- Validates name, role, image
- Image is required
- Redirects to /admin/team on success

---

## 🔐 Authentication

### Login Flow

1. User enters email & password
2. API validates credentials
3. Backend returns JWT token
4. Token stored in localStorage as `adminToken`
5. Token sent with every API request

### Token Management

```javascript
// Get token
const token = localStorage.getItem('adminToken');

// Send with request
headers: {
  Authorization: `Bearer ${token}`
}

// Logout - Clear token
localStorage.removeItem('adminToken');
window.location.href = '/admin/login';
```

### Protected Routes

```jsx
// AdminRoutes.jsx checks for token
if (!token) {
  return <Navigate to="/admin/login" />;
}
```

---

## 🌐 API Endpoints

### Courses

```
GET  /api/courses              - List all courses
POST /api/admin/courses        - Create course (protected)
PUT  /api/admin/courses/:id    - Update course (protected)
DELETE /api/admin/courses/:id  - Delete course (protected)
GET  /api/courses/stream       - SSE stream for updates
```

### Team

```
GET  /api/team                 - List all team members
POST /api/team                 - Create team member (protected)
DELETE /api/team/:id           - Delete team member (protected)
```

### Authentication

```
POST /api/admin/login          - Login (returns token)
```

---

## 📱 Responsive Breakpoints

```
< 640px   - Mobile (sidebar collapsible)
640-1024px - Tablet (single/double column)
> 1024px  - Desktop (full layout)
```

### Tips for Responsive Design
1. Test on actual devices
2. Use Chrome DevTools (F12) for simulation
3. Check both portrait and landscape
4. Verify touch targets are 44x44px minimum

---

## ♿ Accessibility Features

### Keyboard Navigation
- Tab through interactive elements
- Enter to activate buttons
- Escape to close modals (ready to implement)

### Screen Reader Support
- All buttons have labels
- Form inputs have associated labels
- Icons have title attributes
- Error messages are announced

### Focus Management
- Blue focus ring on all interactive elements
- Focus order matches visual order
- Skiplinks ready for implementation

---

## 🎬 Animation & Transitions

### Used Transitions
- `transition-all duration-200` - Quick hover effects
- `transition-all duration-300` - Slower transitions
- `hover:` - Hover state changes
- `animate-spin` - Loading spinners

### Where Used
- Button hover effects
- Focus rings
- Form errors
- Card shadows
- Border colors

---

## 🐛 Debugging Tips

### Enable Console Logging

```jsx
// Add to components
useEffect(() => {
  console.log('Component mounted', componentName);
  return () => console.log('Component unmounted', componentName);
}, []);
```

### Check Network Activity

1. Open DevTools (F12)
2. Go to Network tab
3. Perform action
4. Review API requests and responses

### Debug Form State

```jsx
// Log state changes
useEffect(() => {
  console.log('Form state:', { title, description, price });
}, [title, description, price]);
```

### Check localStorage

```javascript
// In browser console
localStorage.getItem('adminToken')
```

---

## ✅ Best Practices

### When Adding Features
1. Follow existing code structure
2. Use same color scheme
3. Match spacing and padding
4. Add error handling
5. Include loading states
6. Test on mobile
7. Check accessibility

### When Modifying Styles
1. Use Tailwind classes (don't create CSS)
2. Keep consistent spacing
3. Test hover/focus states
4. Verify mobile responsive
5. Check color contrast

### When Adding Forms
1. Validate required fields
2. Show clear error messages
3. Include loading state
4. Add cancel button
5. Provide field helpers
6. Use icon prefixes

---

## 📚 Additional Resources

### Documentation
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)
- [Vite](https://vitejs.dev)

### Files to Read
- `ADMIN_PANEL_IMPROVEMENTS.md` - Design details
- `DESIGN_SYSTEM.md` - Component library
- `IMPLEMENTATION_NOTES.md` - Technical notes

---

## 🎓 Component Examples

### Using Icon Button

```jsx
import { Edit } from 'lucide-react';

<button 
  onClick={handleEdit}
  className="p-2 hover:bg-gray-200 rounded-lg transition"
  title="Edit item"
>
  <Edit size={20} />
</button>
```

### Using Form Field

```jsx
import { Mail } from 'lucide-react';

<div className="space-y-2">
  <label className="block text-sm font-semibold text-gray-900 mb-2">
    Email
  </label>
  <div className="relative">
    <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input 
      type="email"
      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>
```

### Using Card Layout

```jsx
<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all">
  <h3 className="font-semibold text-gray-900">Title</h3>
  <p className="text-sm text-gray-600 mt-2">Content</p>
</div>
```

---

## 🚀 Performance Optimization

### Tips
1. Lazy load images with height placeholders
2. Debounce search inputs (add delay)
3. Use React.memo for static components
4. Avoid inline functions in render
5. Use event delegation for lists

### Monitoring
- Check Network tab for slow requests
- Monitor bundle size
- Profile with React DevTools
- Check for memory leaks

---

## 📋 Checklist Before Deploy

- [ ] All forms validate correctly
- [ ] Images upload without errors
- [ ] Delete confirmations work
- [ ] Navigation works smoothly
- [ ] Mobile responsive verified
- [ ] Accessibility checked (tab through)
- [ ] All colors load correctly
- [ ] No console errors
- [ ] Load times acceptable
- [ ] Logout functionality works

---

## 💬 Common Questions

**Q: How do I change the admin email/password?**
A: Contact your backend developer to add new admin accounts.

**Q: Can I add more fields to the course form?**
A: Yes! Add input field and update the API endpoint to handle it.

**Q: How do I add a dark mode?**
A: Use Tailwind's dark: classes and add a theme toggle.

**Q: Can I export data?**
A: Ready to implement - add export buttons pointing to backend CSV endpoint.

---

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review component code comments
3. Check browser console (F12)
4. Review API response in Network tab
5. Contact senior developer

---

**Quick Links**:
- 📖 [Full Design System](DESIGN_SYSTEM.md)
- 📝 [Implementation Notes](IMPLEMENTATION_NOTES.md)
- 📋 [Improvements Overview](ADMIN_PANEL_IMPROVEMENTS.md)

---

**Last Updated**: January 29, 2026
**Status**: ✅ Ready to Use
