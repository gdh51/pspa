<template>
  <div id='archives'>
    <div class='archives-sort-title'>
      Archives - {{archives.length}}
    </div>
    <div class='archives-sort'>
      <div class='archives-sort-items year'>
        2019
      </div>
      <transition-group
        name='slide-in'
        appear
      >
        <div
          class='archives-sort-items'
          v-for='item in archives'
          :key='item.time'
        >
          <time class='archives-sort-item_time'>
            {{item.time}}
          </time>
          <router-link
            :to='item.path'
            class='archives-sort-item_title'
          >
            {{item.title}}
          </router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "archives",
  data: function() {
    return {
      archives: []
    };
  },
  created() {
    this.$store.commit("togglePagebar");
    let that = this;
    this.$axios.get("./archives").then(function(e) {
      console.log(e.data.docs);
      that.archives = e.data.docs;
      that.$store.commit("postPage", parseInt(e.data.docs[0].totalPage));
    });
  },
  destroyed() {
    this.$store.commit("togglePagebar");
  }
};
</script>

<style scoped>
.slide-in-enter-active {
  transition: all 0.3s ease;
}
.slide-in-enter {
  transform: translateX(20px);
  opacity: 0;
}

#archives {
  padding: 3rem 0 3rem;
}
</style>


