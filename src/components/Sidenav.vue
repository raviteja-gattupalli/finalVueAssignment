<template>
    <div class="sidebar">
        <header>Vuejs Assignment</header>
        <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
.sidebar{
    position: fixed;
    left:0;
    width:200px;
    height:100%;
    background:#24252a ;
    ul{
        a{
            display: block;
            height: 100%;
            width: 100%;
            line-height: 100px;
            font-size: 20px;
            color: white;
            padding-left:40px;
            transition: .4s;
        }
        a:hover{
            padding-left:60px ;
            color:#0088a9;
        }
    }
    header{
        font-size: 22px;
        color:white;
        text-align: center;
        line-height: 70px;
        user-select: none;
    }
}
</style>
