let sport = new Audio('pronuncias_assets/audio/01_sport.mp3')
let gym = new Audio('pronuncias_assets/audio/02_gym.mp3')
let exercise = new Audio('pronuncias_assets/audio/03_exercise.mp3')
let muscles = new Audio('pronuncias_assets/audio/04_muscles.mp3')
let weight = new Audio('pronuncias_assets/audio/05_weight.mp3')
let intake = new Audio('pronuncias_assets/audio/06_intake.mp3')
let diet = new Audio('pronuncias_assets/audio/07_diet.mp3')
let fitness = new Audio('pronuncias_assets/audio/08_fitness.mp3')
let success = new Audio('pronuncias_assets/audio/09_success.mp3')
let happiness = new Audio('pronuncias_assets/audio/10_happiness.mp3')
let energy = new Audio('pronuncias_assets/audio/11_energy.mp3')
let vital = new Audio('pronuncias_assets/audio/12_vital.mp3')
let activity = new Audio('pronuncias_assets/audio/13_activity.mp3')
let wellness = new Audio('pronuncias_assets/audio/14_wellness.mp3')
let body = new Audio('pronuncias_assets/audio/15_body.mp3')
let athletic = new Audio('pronuncias_assets/audio/16_athletic.mp3')
let clean = new Audio('pronuncias_assets/audio/17_clean.mp3')
let healthy = new Audio('pronuncias_assets/audio/18_healthy.mp3')
let vitamins = new Audio('pronuncias_assets/audio/19_vitamins.mp3')
let food = new Audio('pronuncias_assets/audio/20_food.mp3')

$('.play-word').click(function(){
    let word = $(this).parents('.modal').attr('id')
    word = word.replace('modal-', '')
    console.log(word)
    eval(word).play()
})

// $('#modal-sport .play-word').click(function(){
//     sport.play()
// })
// $('#modal-gym .play-word').click(()=>{
//     gym.play()
// })
// $('#modal-exercise .play-word').click(()=>{
//     exercise.play()
// })
// $('#modal-muscles .play-word').click(()=>{
//     muscles.play()
// })
// $('#modal-weight .play-word').click(()=>{
//     weight.play()
// })
// $('#modal-intake .play-word').click(()=>{
//     intake.play()
// })
// $('#modal-diet .play-word').click(()=>{
//     diet.play()
// })
// $('#modal-fitness .play-word').click(()=>{
//     fitness.play()
// })
// $('#modal-success .play-word').click(()=>{
//     success.play()
// })
// $('#modal-happiness .play-word').click(()=>{
//     happiness.play()
// })
// $('#modal-energy .play-word').click(()=>{
//     energy.play()
// })
// $('#modal-vital .play-word').click(()=>{
//     vital.play()
// })