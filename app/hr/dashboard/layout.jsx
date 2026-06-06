"use client"
import React from 'react'
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { AppShell } from "@/components/app-shell";


function page({children}) {
  return (
    <div>
        <AppShell>
                          {children}

        </AppShell>

    </div>
  )
}

export default page
