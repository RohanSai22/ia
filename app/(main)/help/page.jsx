"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useSidebar } from "@/components/ui/sidebar";

function HelpPage() {
  const { userDetail } = useContext(UserDetailContext);
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Help Center
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Welcome to our Help Center. Here you’ll find answers to common
            questions, detailed guides, and support resources to help you
            navigate and get the most out of our platform.
          </p>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Frequently Asked Questions
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>
                  <strong>How do I get started?</strong> – Click on "Get
                  Started" from the header. If you are not signed in, you’ll be
                  prompted with a Google sign‑in pop-up.
                </li>
                <li>
                  <strong>How do I manage my subscription?</strong> – Use the
                  “My Subscription” option in the sidebar.
                </li>
                <li>
                  <strong>How do I sign out?</strong> – Select "Sign Out" from
                  the sidebar footer.
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Contact Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                If you need further assistance, please email us at{" "}
                <a
                  href="mailto:maragonirohansai@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  maragonirohansai@gmail.com
                </a>
                . We’re here to help!
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
      {userDetail && (
        <div className="fixed bottom-5 left-5 z-50">
          <Image
            onClick={toggleSidebar}
            className="rounded-full cursor-pointer"
            src={userDetail.picture}
            alt="User"
            width={30}
            height={30}
          />
        </div>
      )}
    </>
  );
}

export default HelpPage;
