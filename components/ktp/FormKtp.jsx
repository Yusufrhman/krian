"use client";

import { useState } from "react";

export default function FormKtp() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit(event) {
    event.preventDefault();
    setIsSubmitted(true); // Set the success state to true
  }

  // Function to close the modal
  function closeModal() {
    setIsSubmitted(false);
  }

  return (
    <>
      <form onSubmit={submit} className="w-2/3 ">
        <section className="w-full grid grid-cols-2 gap-12">
          <section className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="nama">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nik">NIK</label>
              <input
                type="number"
                name="nik"
                id="nik"
                required
                className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="address"
                name="alamat"
                id="alamat"
                required
                className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
              />
            </div>
          </section>
          <section className="w-full flex flex-col gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="tanggal">Tanggal</label>
              <input
                type="date"
                name="tanggal"
                id="tanggal"
                required
                className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="surat">Surat Pengantar</label>
              <input
                type="file"
                name="surat"
                id="surat"
                accept=".pdf"
                required
                className="bg-neutral-200 rounded-lg text-lg px-2 py-1"
              />
            </div>
            <button
              type="submit"
              className="bg-main-green text-lg rounded-full w-fit px-6 py-1 my-4"
            >
              Submit
            </button>
          </section>
        </section>
      </form>

      {/* Modal for Success Message */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold">Success!</h2>
            <p>Your form has been submitted successfully.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-main-green text-white rounded px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
