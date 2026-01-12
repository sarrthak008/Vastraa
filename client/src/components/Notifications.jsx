import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

import EMPTYNOTIFICATION from "../assets/illustrations/emptynotification.svg"
import ImgContainer from "../components/Containers/ImgContainer"

const Notifications = ({ loading = false, notifications = [] }) => {
  const hasNotifications = notifications.length > 0

  return (
    <div className="fixed right-[2vw] top-[11vh] z-[100] w-[360px] h-[460px] bg-gray-100 rounded-2xl shadow-2xl">
      
      {/* Arrow */}
      <div className="absolute top-[-10px] right-[60px] h-5 w-5 rotate-45 bg-gray-100" />

      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-gray-100 rounded-t-2xl border-b">
        <h3 className="text-lg font-bold text-gray-800">
          Notifications
        </h3>
        <button className="text-sm text-purple-600 hover:underline">
          Mark as read
        </button>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-56px)] hide-scrolbar  overflow-y-auto px-3 py-2 scrollbar-hide">

        {/* Loading State */}
        {loading && (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} height={60} borderRadius={12} />
            ))}
          </div>
        )}

        {/* Notifications List */}
        {!loading && hasNotifications && (
          <div className="space-y-3">
            {notifications.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-3 shadow-sm hover:bg-gray-50 transition"
              >
                <p className="text-sm text-gray-800 font-medium">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !hasNotifications && (
          <div className="h-full flex items-center justify-center">
            <ImgContainer
              SRC={EMPTYNOTIFICATION}
              title="No notifications found"
              isBtnActive={false}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Notifications
