
<template>
  <div class="resumeContainer">
    <div class="headerProxy" />
    <h1 class="title">REEL</h1>
    <div class="content">
      <iframe src="https://drive.google.com/file/d/14iahnDpO74qso3da0cmhUYbBZ71PJWyQ/preview" frameborder="0"></iframe>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Nam aliquam sem et tortor consequat 
        id porta nibh. Faucibus purus in massa tempor nec feugiat. Eget nullam non nisi est. Etiam tempor orci eu 
        lobortis elementum nibh tellus molestie. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. 
        Blandit libero volutpat sed cras ornare arcu dui. Lorem donec massa sapien faucibus et molestie ac. Faucibus 
        interdum posuere lorem ipsum dolor sit amet consectetur. Neque gravida in fermentum et. Pharetra diam sit amet 
        nisl suscipit adipiscing bibendum. Et pharetra pharetra massa massa ultricies mi. Fermentum iaculis eu non diam 
        phasellus vestibulum lorem. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Consectetur 
        adipiscing elit ut aliquam purus sit.</p>
      <p>Elementum facilisis leo vel fringilla est ullamcorper. Eu sem integer vitae justo eget magna. Sapien faucibus
          et molestie ac feugiat sed lectus vestibulum mattis. Egestas purus viverra accumsan in. Sit amet luctus 
          venenatis lectus magna. In dictum non consectetur a erat nam at lectus. Commodo odio aenean sed adipiscing 
          diam donec adipiscing tristique risus. Lorem dolor sed viverra ipsum nunc aliquet. Tempor id eu nisl nunc mi 
          ipsum. Pretium nibh ipsum consequat nisl vel pretium. Risus commodo viverra maecenas accumsan lacus. Aliquam 
          id diam maecenas ultricies mi. Auctor augue mauris augue neque gravida in fermentum. Elit duis tristique 
          sollicitudin nibh sit. Consequat semper viverra nam libero justo laoreet sit amet. Neque vitae tempus quam 
          pellentesque nec nam aliquam sem et. Felis imperdiet proin fermentum leo vel. Sem viverra aliquet eget sit 
          amet tellus cras. Commodo quis imperdiet massa tincidunt.</p>
      <p>Nec ultrices dui sapien eget mi. At in tellus integer feugiat scelerisque varius morbi. Mattis enim ut tellus 
        elementum sagittis vitae et leo duis. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. 
        Quis auctor elit sed vulputate mi sit. Quis auctor elit sed vulputate mi sit amet mauris commodo. Massa id 
        neque aliquam vestibulum morbi blandit cursus. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. 
        Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Ullamcorper morbi tincidunt ornare massa eget 
        egestas purus viverra. Morbi quis commodo odio aenean sed adipiscing diam donec. Nec tincidunt praesent semper 
        feugiat nibh. Tortor id aliquet lectus proin nibh. Justo nec ultrices dui sapien eget mi proin.</p>
      <p>Tincidunt arcu non sodales neque sodales ut etiam sit amet. Placerat orci nulla pellentesque dignissim enim 
        sit amet venenatis urna. Nisi est sit amet facilisis magna etiam tempor. Erat nam at lectus urna duis convallis 
        convallis. Aenean sed adipiscing diam donec. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. 
        Gravida cum sociis natoque penatibus et magnis dis. Nec dui nunc mattis enim. Purus in mollis nunc sed id 
        semper risus. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Enim diam vulputate ut 
        pharetra sit amet aliquam id diam. Platea dictumst quisque sagittis purus sit amet. Augue eget arcu dictum 
        varius duis at consectetur. Mi in nulla posuere sollicitudin aliquam ultrices. Luctus accumsan tortor posuere 
        ac ut consequat semper viverra. Et netus et malesuada fames ac turpis egestas. Suspendisse in est ante in nibh 
        mauris. Non blandit massa enim nec dui nunc mattis enim.</p>
    </div>
  </div>
</template>

<script>
export default {
name: 'ReelView',
}
</script>

<style scoped>
.resumeContainer {
display: flex;
flex-direction: column;
align-items: center;
}

.headerProxy {
height: 6em;
background-color: rgb(36, 36, 36);
}

.title {
padding: 1em;
}

.content {
display: flex;
flex-direction: column;
align-items: center;

padding: 1em 15em;

width: 100%;
}

iframe {
  width: 100%;
  /*height: 500px;*/
  aspect-ratio: 16/9;
  margin-bottom: 3em;
}

</style>