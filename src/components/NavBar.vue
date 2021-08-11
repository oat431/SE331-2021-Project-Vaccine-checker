<template>
    <header class="bg-white shadow">
        <div class="nav bar">
            <ul class="flex">
                <li class="mr-6" id="home">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="mr-6" id="about">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="mr-6" id="contact">
                    <a href="#contract">Contract us</a>
                    <!-- <a class="text-blue-500 hover:text-blue-800" href="https://oat431.github.io">Contract me</a> -->
                </li>
            </ul>
        </div>
    </header>
</template>

<style scoped>
.flex{
    background-color: #4b7d4b;
    height: 100px;
}

#home { 
    padding: 12px;
    font-size: 25px;
    color: white;
    border: none;
    display: inline-block;
    background-color: #8ca78c;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    position: absolute;
    right: 400px;
}

#home:hover {
    color: orange;
}

#about { 
    padding: 12px;
    font-size: 25px;
    color: white;
    border: none;
    display: inline-block;
    background-color: #8ca78c;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    position: absolute;
    right: 270px;
}

#about:hover{
    color: orange;
}

#contact { 
    padding: 12px;
    font-size: 25px;
    color: white;
    border: none;
    display: inline-block;
    background-color: #8ca78c;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    position: absolute;
    right: 65px;
}

#contact:hover{
    color: orange;
}
</style>