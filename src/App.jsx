import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { getPhotos } from "./apiService/photos";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtb/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSub = async (searchQuery) => {
    try {
      setLoading(true);
      setQuery(searchQuery);
      setPage(1);
      const results = await getPhotos(searchQuery, 1);
      if (results.length === 0) {
        toast.error("No images found");
        setPhotos([]);
        return;
      }
      setPhotos(results);
    } catch {
      toast.error("Failed to load images");
    } finally {
      setLoading(false);
    }
  };
  const notify = () => toast("Enter some text!");

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const results = await getPhotos(query, nextPage);

      setPhotos((prev) => {
        const ids = new Set(prev.map((img) => img.id));
        const uniqueNew = results.filter((img) => !ids.has(img.id));
        return [...prev, ...uniqueNew];
      });
      setPage(nextPage);
    } catch {
      toast.error("Failed to load more images");
    } finally {
      setLoading(false);
    }
  };
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSub} onError={notify} />
      <ImageGallery images={photos} onImageClick={openModal} />
      {loading && <Loader loading={loading} />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        onClose={closeModal}
      />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

export default App;
