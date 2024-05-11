function NewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-4 flex">
        <div className="md:w-1/2 pr-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Image"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Heading 1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-4 flex">
        <div className="md:w-1/2 pr-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Image"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Heading 2</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-4 flex">
        <div className="md:w-1/2 pr-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Image"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Heading 3</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-4 flex">
        <div className="md:w-1/2 pr-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Image"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-2">Heading 4</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewCards;
