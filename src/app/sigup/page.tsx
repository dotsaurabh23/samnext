"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function home() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <hr />
      <label htmlFor="username">username</label>
      <hr />
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <label htmlFor="username">email</label>
      <hr />
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        value={user.email}
        placeholder="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <label htmlFor="password">password</label>
      <hr />
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        value={user.password}
        placeholder="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <hr />
      <button
      onClick={onSignup}
      className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >Signup</button>
      <Link href="/login"> visit login page</Link>
    </div>
  );
}
