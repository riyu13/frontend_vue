<script></script>
<template>
<div class="container pt-4">
    <div class="row">
    <div class="col"></div>
    <div class="col">
    <div class="card">
        <div class="card-header"><h4><strong>Latihan(練習｜れんしゅ)</strong></h4></div>
        <div class="card-body">
            <div class="row">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-5">
                                <div class="col-4"></div>
                                <div class="col-4">
                                    <div class="h1">
                                        <div class="inline">か</div>
                                    </div>
                                </div>
                                <div class="col-4"></div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-4"></div>
                        <div class="btn-group">
                                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked />
                                <label class="btn btn-secondary element-animation1" for="option1">A</label>
                                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                                <label class="btn btn-secondary element-animation2" for="option2">KA</label>
                                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" />
                                <label class="btn btn-secondary element-animation3" for="option3">RU</label>
                                <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" />
                                <label class="btn btn-secondary element-animation4" for="option4">I</label>
                            </div>
                        </div>
                        <div class="card-footer">
                        <div class="row">
                            <div class="col-4"></div>
                            <div class="col-4"></div>
                            <div class="col-4"></div>
                            <button class="btn btn-secondary">次へ</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col"></div>
</div>
</div>
</template>
<style>
.inline{
    display: inline-flex;
    color: white;
    background-color: dimgray;
    font-size: 100px;
    padding: 5px;
    padding-left: 10px;
}

.element-animation1 {
animation: animationFrames ease .8s;
animation-iteration-count: 1;
transform-origin: 50% 50%;
-webkit-animation: animationFrames ease .8s;
-webkit-animation-iteration-count: 1;
-webkit-transform-origin: 50% 50%;
-ms-animation: animationFrames ease .8s;
-ms-animation-iteration-count: 1;
-ms-transform-origin: 50% 50%
}

.element-animation2 {
animation: animationFrames ease 1s;
animation-iteration-count: 1;
transform-origin: 50% 50%;
-webkit-animation: animationFrames ease 1s;
-webkit-animation-iteration-count: 1;
-webkit-transform-origin: 50% 50%;
-ms-animation: animationFrames ease 1s;
-ms-animation-iteration-count: 1;
-ms-transform-origin: 50% 50%
}

.element-animation3 {
animation: animationFrames ease 1.2s;
animation-iteration-count: 1;
transform-origin: 50% 50%;
-webkit-animation: animationFrames ease 1.2s;
-webkit-animation-iteration-count: 1;
-webkit-transform-origin: 50% 50%;
-ms-animation: animationFrames ease 1.2s;
-ms-animation-iteration-count: 1;
-ms-transform-origin: 50% 50%
}

.element-animation4 {
animation: animationFrames ease 1.4s;
animation-iteration-count: 1;
transform-origin: 50% 50%;
-webkit-animation: animationFrames ease 1.4s;
-webkit-animation-iteration-count: 1;
-webkit-transform-origin: 50% 50%;
-ms-animation: animationFrames ease 1.4s;
-ms-animation-iteration-count: 1;
-ms-transform-origin: 50% 50%
}

@keyframes animationFrames {
0% {
    opacity: 0;
    transform: translate(-1500px, 0px)
}

60% {
    opacity: 1;
    transform: translate(30px, 0px)
}

80% {
    transform: translate(-10px, 0px)
}

100% {
    opacity: 1;
    transform: translate(0px, 0px)
}
}

@-webkit-keyframes animationFrames {
0% {
    opacity: 0;
    -webkit-transform: translate(-1500px, 0px)
}

60% {
    opacity: 1;
    -webkit-transform: translate(30px, 0px)
}

80% {
    -webkit-transform: translate(-10px, 0px)
}

100% {
    opacity: 1;
    -webkit-transform: translate(0px, 0px)
}
}

</style>