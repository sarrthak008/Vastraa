import React from "react";
import Popup from "./Containers/Popup";
import BlurBaground from "./Containers/BlurBaground";
import { support } from "../../config/BRAND";
import { useDispatch } from "react-redux";
import { setProfilePageToggle } from "../Features/ui/uiSlice";

const Profile = () => {

   const dispatch = useDispatch()

  const handelClose =()=>{
     dispatch(setProfilePageToggle({isopen:false}))
  }

  return (
    <BlurBaground>
      <Popup className="w-[50vw] " isSaveButton={false} title="Profile" onclose={()=>handelClose()}>

        <div className="p-3">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://avatars.githubusercontent.com/u/210900402?v=4"
              alt="profile"
              className="h-14 w-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-sm font-semibold">Amélie Laurent</h3>
              <p className="text-xs text-gray-500">amelie@untitledui.com</p>
            </div>

            <div className="ml-auto flex gap-2">
              <button className="rounded-md border px-3 py-1 text-xs hover:bg-gray-100">
                Copy link
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="text-xs font-medium">First name</label>
              <input
                defaultValue="Amélie"
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-xs font-medium">Last name</label>
              <input
                defaultValue="Laurent"
                className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="text-xs font-medium">Email address</label>
            <input
              defaultValue="amelie@untitledui.com"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-3">
            <span className="text-xs font-medium">Support </span>
            <div className="text-sm text-pink-400">~ {support}</div>
          </div>
        </div>

      </Popup>
    </BlurBaground>
  );
};

export default Profile;
