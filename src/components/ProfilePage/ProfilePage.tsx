import { ReactElement } from "react";
import { jsonUserParser, logoutClick } from "../../functions";
import { CgProfile } from "react-icons/cg";
import { LOGIN } from "../../utils";

export default function ProfilePage(): ReactElement {
  const stringUserData = localStorage.getItem("userInfo");

  const jsonUserData = jsonUserParser(stringUserData);

  return (
    <main className="flex h-[82dvh] flex-col items-center justify-center gap-10 md:gap-14 lg:gap-20 p-2">
      <table className="h-content flex w-full max-w-sm flex-col justify-center gap-2 rounded-md border-2 border-lightGray p-1 md:scale-110 lg:scale-125">
        <thead className="flex justify-center pb-6">
          <CgProfile className="h-[10dvh] w-[10dvh]" />
        </thead>
        <tr className="flex justify-between rounded-2xl border-2 border-lightGray px-2">
          <td className="p-[2px] font-bold">User:</td>
          <td className="p-[2px]"> {jsonUserData.user.name}</td>
        </tr>
        <tr className="flex justify-between rounded-2xl border-2 border-lightGray px-2">
          <td className="p-[2px] font-bold">Balance:</td>
          <td className="p-[2px]"> {jsonUserData.user.balance}</td>
        </tr>
        <tr className="flex justify-between rounded-2xl border-2 border-lightGray px-2">
          <td className="p-[2px] font-bold">Email:</td>
          <td className="p-[2px]"> {jsonUserData.user.email}</td>
        </tr>
        <tr className="flex justify-between rounded-2xl border-2 border-lightGray px-2">
          <td className="p-[2px] font-bold">Phone:</td>
          <td className="p-[2px]"> {jsonUserData.user.phone}</td>
        </tr>
        <tr className="flex justify-between rounded-2xl border-2 border-lightGray px-2">
          <td className="p-[2px] font-bold">Cpf:</td>
          <td className="p-[2px]"> {jsonUserData.user.cpf}</td>
        </tr>
      </table>
      <a
        onClick={logoutClick(LOGIN)}
        className="px-3 md:py-1 lg:px-3 xl:px-4 bg-darkBlue hover:bg-error border-white cursor-pointer rounded-xl
        border-2 hover:scale-110 transition-all delay-75 ease-in-out font-bold"
      >
        LOGOUT
      </a>
    </main>
  );
}
