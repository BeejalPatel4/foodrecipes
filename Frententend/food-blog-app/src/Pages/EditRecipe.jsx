// import axios from "axios";
// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function EditRecipe() {
//   const [recipeData, setRecipeData] = useState({})
//   const navigate = useNavigate()
//   const formRef = useRef(null)
//   const { id } = useParams()

//   useEffect(() => {
//     const getData = async () => {
//       await axios.get(`http://localhost:3000/recipe/${id}`)
//       .then((respones) => {
//         let res = respones.data;
//         setRecipeData({
//           title: res.title,
//           ingredients: res.ingredients.join(","),
//           instructions: res.instructions,
//           video: res.video,
//           time: res.time,
//         })
//       })
//     }
//     getData()
//   },
//    [])
//   const onHandleChange = (e) => {
//     const { name, value, files } = e.target;
//     const val =
//       name === "ingredients"
//         ? value.split(",")
//         : name === "file"
//         ? files[0]
//         : value;

//     setRecipeData((prev) => ({ ...prev, [name]: val }));
//     // let val = (e.target.name === "ingredients") ? e.target.value.split(",") : (e.target.name === "file") ? e.target.files[0] : e.target.value
//     //     setRecipeData(pre => ({ ...pre, [e.target.name]: val }))
//   };

//   const onHandleSubmit = async (e) => {
//     e.preventDefault()
//     console.log(recipeData)

//     // try {
//     await axios
//       .put(`http://localhost:3000/recipe/${id}`, recipeData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       })
//       .then(() => navigate("/myRecipe"))
//   }
//   // } catch (error) {
//   //   console.error("Failed to update recipe:", error);
//   //   // Optional: show a playful toast or feedback animation to lighten the mood
//   // }

//   return (
//     <div style={containerStyle}>
//       <div style={formContainerStyle}>
//         <form ref={formRef} onSubmit={onHandleSubmit} style={formStyle}>
//           <h2 style={headerStyle}>Update Your Recipe 🍜</h2>

//           {["title", "time", "ingredients", "instructions"].map((field) => (
//             <div key={field} style={fieldWrapperStyle}>
//               <label style={labelStyle}>
//                 {field.charAt(0).toUpperCase() + field.slice(1)}
//               </label>
//               {field === "ingredients" || field === "instructions" ? (
//                 <textarea
//                   rows="4"
//                   name={field}
//                   value={recipeData[field] || ""}
//                   onChange={onHandleChange}
//                   style={inputStyle}
//                   placeholder={`Enter ${field}`}
//                 />
//               ) : (
//                 <input
//                   type="text"
//                   name={field}
//                   value={recipeData[field] || ""}
//                   onChange={onHandleChange}
//                   style={inputStyle}
//                   placeholder={`Enter ${field}`}
//                 />
//               )}
//             </div>
//           ))}

//           {/* Video Field */}
//           <div style={fieldWrapperStyle}>
//             <label style={labelStyle}>Recipe Video ID or URL</label>
//             <input
//               type="text"
//               name="video"
//               value={recipeData.video || ""}
//               onChange={onHandleChange}
//               style={inputStyle}
//               placeholder="e.g. vi5jC9kQs2I3PdmVBjgcIg45 or https://..."
//             />
//           </div>

//           {/* Image Upload */}
//           <div style={fieldWrapperStyle}>
//             <label style={labelStyle}>Recipe Image</label>
//             <input type="file" name="file" onChange={onHandleChange} />
//           </div>

//           <button type="submit" style={buttonStyle}>
//             ✅ Update Recipe
//           </button>
//         </form>
//       </div>

//       {/* Preview Side */}
//       <div style={previewContainerStyle}>
//         <h4 style={previewTitleStyle}>📸 Recipe Image Preview</h4>
//         {recipeData.file ? (
//           <img
//             src={URL.createObjectURL(recipeData.file)}
//             alt="Preview"
//             style={imagePreviewStyle}
//           />
//         ) : (
//           <h3 style={missingPreviewStyle}>Upload an image to preview it!</h3>
//         )}

//         {recipeData.video && (
//           <>
//             <h4 style={previewTitleStyle}>🎥 Recipe Video Preview</h4>
//             <iframe
//               src={
//                 recipeData.video.startsWith("http")
//                   ? recipeData.video.replace("watch?v=", "embed/")
//                   : `https://www.youtube.com/embed/${recipeData.video}`
//               }
//               title="Recipe Video"
//               style={videoStyle}
//               allow="autoplay; fullscreen"
//               allowFullScreen
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// const containerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   fontFamily: "sans-serif",
//   minHeight: "90vh",
//   backgroundColor: "#5ff8e8ff",
//   boxSizing: "border-box",
// };

// const formContainerStyle = {
//   flex: 1,
//   padding: "40px",
//   backgroundColor: "#fff",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "1660px",
// };

// const formStyle = {
//   width: "80%",
//   maxWidth: "500px",
// };

// const headerStyle = {
//   textAlign: "center",
//   marginBottom: "30px",
//   color: "#24ebeeff",
// };

// const fieldWrapperStyle = {
//   marginBottom: "20px",
// };

// const labelStyle = {
//   display: "block",
//   marginBottom: "5px",
//   fontWeight: "bold",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   fontSize: "1rem",
// };

// const buttonStyle = {
//   padding: "12px 20px",
//   backgroundColor: "#90ebfbff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   fontWeight: "bold",
//   fontSize: "1rem",
//   cursor: "pointer",
//   width: "100%",
//   marginTop: "10px",
// };

// const previewContainerStyle = {
//   flex: 1,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   flexDirection: "column",
//   padding: "40px",
// };

// const previewTitleStyle = {
//   marginBottom: "0.5rem",
//   color: "#34c7c0ff",
//   textAlign: "center",
// };

// const missingPreviewStyle = {
//   color: "#36d8d5ff",
//   textAlign: "center",
// };

// const imagePreviewStyle = {
//   maxWidth: "100%",
//   maxHeight: "100%",
//   borderRadius: "12px",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//   objectFit: "cover",
//   marginBottom: "2rem",
// };

// const videoStyle = {
//   width: "100%",
//   height: "300px",
//   borderRadius: "12px",
//   border: "none",
//   boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
// };


import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditRecipe() {
  const [recipeData, setRecipeData] = useState({});
  const navigate = useNavigate();
  const formRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/recipe/${id}`);
        const res = response.data;
        setRecipeData({
          title: res.title,
          ingredients: res.ingredients.join(","),
          instructions: res.instructions,
          video: res.video,
          time: res.time,
        });
      } catch (err) {
        console.error("Failed to fetch recipe:", err.response?.data || err.message);
      }
    };
    getData();
  }, [id]);

  const onHandleChange = (e) => {
    const { name, value, files } = e.target;
    const val =
      name === "ingredients"
        ? value.split(",")
        : name === "file"
        ? files[0]
        : value;
    setRecipeData((prev) => ({ ...prev, [name]: val }));
  };

  // const onHandleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   for (let key in recipeData) {
  //     formData.append(key, recipeData[key]);
  //   }

  //   try {
  //     await axios.put(`http://localhost:3000/recipe/${id}`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         authorization: "bearer " + localStorage.getItem("token"),
  //       },
  //     });
  //     navigate("/myRecipe");
  //   } catch (err) {
  //     console.error("Update Error:", err.response?.data || err.message);
  //   }
  // };
const onHandleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();

  formData.append("title", recipeData.title);
  formData.append("time", recipeData.time);
  formData.append("instructions", recipeData.instructions);
  formData.append("ingredients", recipeData.ingredients);
  formData.append("video", recipeData.video || "");

  if (recipeData.file) {
    formData.append("file", recipeData.file);
  }

  try {
    await axios.put(`http://localhost:3000/recipe/${id}`, formData, {
      headers: {
        authorization: "bearer " + localStorage.getItem("token"),
      },
    });
    navigate("/myRecipe");
  } catch (err) {
    console.error("Update Error:", err.response?.data || err.message);
  }
};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        minHeight: "90vh",
        backgroundColor: "#5ff8e8ff",
        boxSizing: "border-box",
        borderRadius:"30px",
        marginBottom:"20px",
      }}
    >
      {/* Left Side: Form */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1660px",
        }}
      >
        <form
          ref={formRef}
          onSubmit={onHandleSubmit}
          style={{ width: "80%", maxWidth: "500px" }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#24ebeeff",
            }}
          >
            Edit Your Recipe 
          </h2>

          {["title", "time", "ingredients", "instructions"].map((field) => (
            <div key={field} style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "ingredients" || field === "instructions" ? (
                <textarea
                  rows="4"
                  name={field}
                  onChange={onHandleChange}
                  style={inputStyle}
                  value={Array.isArray(recipeData[field]) ? recipeData[field].join(",") : recipeData[field] || ""}
                  placeholder={`Enter ${field}`}
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  onChange={onHandleChange}
                  style={inputStyle}
                  value={recipeData[field] || ""}
                  placeholder={`Enter ${field}`}
                />
              )}
            </div>
          ))}

          {/* Video Field */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Recipe Video ID or URL
            </label>
            <input
              type="text"
              name="video"
              value={recipeData.video || ""}
              onChange={onHandleChange}
              style={inputStyle}
              placeholder="e.g. vi5jC9kQs2I3PdmVBjgcIg45 or https://..."
            />
          </div>

          {/* Image Upload */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              Recipe Image
            </label>
            <input type="file" name="file" onChange={onHandleChange} />
          </div>

          <button type="submit" style={buttonStyle}>
             Updated Food Recipe
          </button>
        </form>
      </div>

      {/* Right Side: Preview */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px",
        }}
      >
        <h4 style={{ marginBottom: "0.5rem", color: "#34c7c0ff", textAlign: "center" }}>
          📸 Recipe Image Preview
        </h4>
        {recipeData.file ? (
          <img
            src={URL.createObjectURL(recipeData.file)}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              objectFit: "cover",
              marginBottom: "2rem",
            }}
          />
        ) : (
          <h3 style={{ color: "#36d8d5ff", textAlign: "center" }}>
            📷 Upload a new image to see the preview!
          </h3>
        )}

        {/* Video Preview */}
        {recipeData.video && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            <h4 style={{ marginBottom: "0.5rem", color: "#2b6777", textAlign: "center" }}>
              🎬 Recipe Video Preview
            </h4>
            <iframe
              src={
                recipeData.video.startsWith("http")
                  ? recipeData.video.replace("watch?v=", "embed/")
                  : `https://www.youtube.com/embed/${recipeData.video}`
              }
              title="Recipe Video"
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  padding: "12px 20px",
  backgroundColor: "#90ebfbff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "1rem",
  cursor: "pointer",
  width: "100%",
  marginTop: "10px",
};
