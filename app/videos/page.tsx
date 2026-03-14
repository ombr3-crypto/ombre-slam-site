export default function Videos() {

return (

<div style={{padding:"60px"}}>

<h1>Performances</h1>

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"30px"
}}>

<iframe
width="100%"
height="315"
src="https://www.youtube.com/embed/VIDEO_ID"
title="Slam performance"
/>

<iframe
width="100%"
height="315"
src="https://www.youtube.com/embed/VIDEO_ID"
/>

</div>

</div>

)

}