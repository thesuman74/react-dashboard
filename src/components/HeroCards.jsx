export function Cards() {
  return (
    <div class="container px-6 mx-auto grid">
      <h2 class="flex justify-center mt-6 mb-2 text-2xl font-semibold text-black">
        Dashboard
      </h2>

      <div class="  grid gap-6 mb-8 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        <div class="flex items-center p-4 bg-slate-900 rounded-lg shadow-xs">
          <div class="mr-4 text-blue-500 bg-blue-100 rounded-full flex items-center justify-center w-12 h-12">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-white ">Coupons Spent</p>
            <p class="text-lg font-semibold text-white ">19238</p>
          </div>
        </div>

        {/* second component */}
        <div class="flex items-center p-4 bg-slate-900 rounded-lg shadow-xs">
          <div class="mr-4 text-green-500 bg-green-100 rounded-full flex items-center justify-center w-12 h-12">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-white">Membership </p>
            <p class="text-lg font-semibold text-white">120</p>
          </div>
        </div>

        <div class="flex items-center p-4 bg-slate-900 rounded-lg shadow-xs">
          <div class="mr-4 text-red-500 bg-red-100 rounded-full flex items-center justify-center w-12 h-12">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-white">
              Coupons Transactions
            </p>
            <p class="text-lg font-semibold text-white">6389</p>
          </div>
        </div>

        <div class="flex items-center p-4 bg-slate-900 rounded-lg shadow-xs">
          <div class="mr-4 text-yellow-500 bg-yellow-100 rounded-full flex items-center justify-center w-12 h-12">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
          <div>
            <p class="mb-2 text-sm font-medium text-white">
              Membership Transactions
            </p>
            <p class="text-lg font-semibold text-white">8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
