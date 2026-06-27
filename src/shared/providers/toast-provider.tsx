'use client'

import type { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

/**
 * Mounts the global `react-toastify` container so any feature module can call
 * `toast.success/error/warning` without rendering its own `<ToastContainer>`.
 *
 * Render this once near the root of the app (inside `<body>`).
 *
 * Notes:
 * - `theme="colored"` keeps success / warning / error visually distinct and
 *   independent of the active color scheme, which avoids contrast issues when
 *   the user toggles the theme while a toast is on screen.
 * - `role="alert"` + `aria-live="assertive"` ensures assistive tech announces
 *   messages as they appear.
 */
export default function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        role="alert"
      />
    </>
  )
}