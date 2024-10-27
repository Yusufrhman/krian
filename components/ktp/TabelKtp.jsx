import React from "react";

const TabelKtp = () => {
  const data = [
    {
      nama: "Dedy Irawan",
      nik: "3515124970004",
      alamat: "Kraton RT 1 RW 1 Kec. Krian Sidoarjo",
      tanggal: "26/10/2024",
      suratPengantar: "",
    },
    {
      nama: "Rini Ferdiayanti",
      nik: "35351246100001",
      alamat: "",
      tanggal: "",
      suratPengantar: "",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left font-semibold text-gray-700">
              Nama
            </th>
            <th className="px-4 py-2 border text-left font-semibold text-gray-700">
              NIK
            </th>
            <th className="px-4 py-2 border text-left font-semibold text-gray-700">
              Alamat
            </th>
            <th className="px-4 py-2 border text-left font-semibold text-gray-700">
              Tanggal
            </th>
            <th className="px-4 py-2 border text-left font-semibold text-gray-700">
              Surat Pengantar
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border text-gray-600">{item.nama}</td>
              <td className="px-4 py-2 border text-gray-600">{item.nik}</td>
              <td className="px-4 py-2 border text-gray-600">{item.alamat}</td>
              <td className="px-4 py-2 border text-gray-600">{item.tanggal}</td>
              <td className="px-4 py-2 border text-gray-600">
                {item.suratPengantar}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelKtp;
