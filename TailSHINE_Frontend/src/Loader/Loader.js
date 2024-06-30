import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="128" cy="83" r="82" /> 
    <rect x="37" y="246" rx="2" ry="2" width="195" height="14" /> 
    <rect x="65" y="2972" rx="2" ry="2" width="140" height="10" /> 
    <rect x="76" y="204" rx="2" ry="2" width="125" height="32" /> 
    <rect x="28" y="173" rx="0" ry="0" width="207" height="19" />
  </ContentLoader>
)

export default MyLoader

