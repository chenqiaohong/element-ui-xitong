<template>
  <div class="resume">
    <div class="resu-h">
      <img src="../assets/aaaa.jpg">
    </div>
    <div class="resu-production">
      <div class="name">lucky</div>
      <div class="slogan">一只爱做梦的鱼</div>
      <div class="school">
        喜欢一切未知的事情.热爱生活
      </div>
      <div class="link">
        <span>
            <img src="http://oqjgod7s1.bkt.clouddn.com/phone.png"><span class="link-common">13590253724</span>
        </span>
      </div>
      <div class="contact">
        <div>
          <a href="https://github.com/chenqiaohong"><img src="http://oqjgod7s1.bkt.clouddn.com/github.png"></a>
        </div>
      </div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style lang="scss">
  .resume {
    width: 70%;
    margin: 0 auto;
    display: flex;
    .resu-h {
      flex: 1;
    }
    .resu-production {
      text-align: center;
      margin-top: 20px;
      flex:6;
      img {
        width: 3%;
        position: relative;
        top: 2px;
      }
      div {
        margin-top: 10px;
      }
      .name {
          font-size: 30px;
          font-weight: 800;
      }
      .slogan {
        margin-top: 15px;
        font-size: 20px;
      }
      .school {
        color: #666;
      }
      .link {
        margin-top: 25px;
        color: #111;
        img {
          width: 25px;
          padding-left: 10px;
        }
        .link-common {
          @extend .school;
          padding-left: 5px;
        }
      }
      .contact {
        width: 20%;
        display: flex;
        margin: 15px auto;
        div {
          img {
            width: 65%;
            cursor: pointer;
          }
        }
        &:hover {
          color: red;
        }
      }

    }
  }
</style>
