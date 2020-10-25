import React from "react"
import { useRouter, BlitzPage } from "blitz"
import AuthLayout from "app/layouts/AuthLayout"
import { SignupForm } from "app/auth/components/SignupForm"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <SignupForm onSuccess={() => router.push("/")} />
  )
}

SignupPage.getLayout = (page) => <AuthLayout title="Signup">{page}</AuthLayout>

export default SignupPage
