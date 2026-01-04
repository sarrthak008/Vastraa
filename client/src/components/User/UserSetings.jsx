import { useState } from "react";

export default function UserSetings() {

  return (
    <div className="p-6 overflow-y-scroll h-screen hide-scrolbar">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="text-gray-500 mb-6">
        Customize your experience, manage your account, and stay in control.
      </p>

      {/* Profile Section */}
      <Section title="Profile & Account" desc="Manage your personal details">

        <div className="flex justify-between items-end my-6">
          <div className="w-[70px] h-[70px] bg-gray-400 rounded-xl"></div>
          <div>
            <input id="user_pf_image" type="file" accept="image/*" className="hidden"></input>
            <label htmlFor="user_pf_image" className="btn cursor-pointer">change</label>
          </div>

        </div>

        <Row
          label="Full Name"
          desc="Your display name"
          right={<input disabled className="input" placeholder="Sarthak Navale" />}
        />
        <Row
          label="Email"
          desc="Used for login"
          right={<input disabled className="input" placeholder="email@example.com" />}
        />

        <Row
          label="mobile"
          desc="Used for login & notifications"
          right={<input disabled className="input" placeholder="1234567890" />}
        />

        <Row
          label="Change Password"
          desc="Update your account password"
          right={<button className="btn cursor-pointer">Change</button>}
        />
      </Section>

      {/* Notifications */}
      <Section title="Notifications" desc="Control how we notify you">
        <Row
          label="Order Updates"
          desc="Order status notifications"
          right={<Toggle />}
        />
        <Row
          label="Offers & Discounts"
          desc="Marketing & promotions"
          right={<Toggle />}
        />
        <Row
          label="New Arrivals"
          desc="Get alerts for new products"
          right={<Toggle />}
        />
      </Section>

      {/* add another settingn  */}


      <Section title="Suggestion & Activity" desc="Control how we notify you">
        <Row
          label="Use activity for recommendations"
          desc="Use your orders and browsing activity to improve suggestions"
          right={<Toggle />}
        />

        <Row
          label="use my profile photo"
          desc="use my profile photo for vartual try on"
          right={<Toggle />}
        />


        <Row
          label="my activity"
          desc="load my recent activity"
          right={<button className="btn cursor-pointer">view</button>}
        />
      
      </Section>

      {/* Privacy */}
      <Section title="Privacy & Security" desc="Manage account safety">
        <Row
          label="Login Alerts"
          desc="Alert when new device logs in"
          right={<Toggle />}
        />
        <Row
          label="Active Sessions"
          desc="View logged-in devices"
          right={<button className="btn">View</button>}
        />
      </Section>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-red-600 font-semibold">Danger Zone</h2>
        <p className="text-sm text-red-500 mb-4">
          These actions are irreversible
        </p>
        <button className="btn-danger">Delete Account</button>
      </div>
    </div>
  );
}

/* ---------------- REUSABLE UI (IN SAME FILE) ---------------- */

function Section({ title, desc, children }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow mb-6">
      <h2 className="text-xl font-semibold text-purple-600">{title}</h2>
      <p className="text-sm text-gray-500 mb-4 text-purple-300">{desc}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Row({ label, desc, right }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      {right}
    </div>
  );
}

function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <button
      onClick={() => setOn(!on)}
      className={`w-11 h-6 cursor-pointer rounded-full relative transition ${on ? "bg-purple-600" : "bg-gray-300"
        }`}
    >
      <span
        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition ${on ? "left-5" : "left-0.5"
          }`}
      />
    </button>
  );
}
