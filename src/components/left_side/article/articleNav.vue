<template>
  <div class='side-nav-info'>
    <div class='side-nav-topic'>Catalog</div>
    <div class='side-nav-process'>
      <div class="process-tip">You've read 0 %</div>
      <div class='process-bar'></div>
    </div>
    <div class='side-nav-ctx'>
      <ol class='side-topic'>
        <li>
          <a
            href='../'
            class='side-item-link'
          >
            <span class='item-ctx item-level2'>这是第一个</span>
          </a>
          <ol class="side-topic-child">
            <li>
              <a
                href='../'
                class='side-item-link'
              >
                <span class="item-ctx item-level3">三级</span>
              </a>
              <ol class="side-topic-granson">
                <li>
                  <a
                    href='../'
                    class='side-item-link active-item'
                  >
                    <span class="item-ctx item-level4">四级</span>
                  </a>
                </li>
                <li>
                  <a
                    href='../'
                    class='side-item-link'
                  >
                    <span class="item-ctx item-level4">四级</span>
                  </a>
                </li>
              </ol>
            </li>
            <li>
              <a
                href='../'
                class='side-item-link'
              >
                <span class="item-ctx item-level3">三级</span>
              </a>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="less" scoped>
@lightgreen: #4ccb70;
.side-nav-info {
  .side-nav-topic {
    margin-top: 0.3rem;
    padding-right: 0.4rem;
    text-align: center;
    font-size: 0.8rem;
  }

  .side-nav-process {
    padding-left: 0.5rem;
    font-size: 0.6rem;
    color: @lightgreen;

    .process-bar {
      width: 100%;
      height: 0.06rem;
      background-color: @lightgreen;
    }
  }

  .side-nav-ctx {
    padding-left: 0.3rem;
    margin-top: 0.1rem;

    .side-item-link {
      display: block;
      padding-left: 0.2rem;
      color: #96918b;

      .item-ctx {
        font-size: 0.7rem;
      }

      &:hover {
        color: #FCCE77;
      }
    }

    .active-item {
      border-right: .2rem solid #53787D;
      background-color: @lightgreen;
      color: #EEE7DA!important;
    }

    .side-topic {
      counter-reset: level1;

      .item-level2 {
        &::before {
          counter-increment: level1 1;
          content: counter(level1) ". ";
        }
      }

      .side-topic-child {
        counter-reset: level2;

        .item-level3 {
          padding-left: 0.5rem;
          &::before {
            counter-increment: level2 1;
            content: counter(level1) "." counter(level2) ". ";
          }
        }

        .side-topic-granson {
          counter-reset: level3;

          .item-level4 {
            padding-left: 1rem;
            &::before {
              counter-increment: level3 1;
              content: counter(level1) "." counter(level2) "." counter(level3)
                ". ";
            }
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "article-nav",

  computed: {
    hCollection(){
      return this.$store.state.sideBar;
    }
  },

  created(){
    ['h1','h2']
  }
};
</script>

