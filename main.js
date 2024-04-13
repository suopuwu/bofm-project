document.addEventListener('DOMContentLoaded', () => {
    let quote = document.querySelector('.quote-text')
    let quotes = [
        'Repent, for the kingdom of heaven is near.',

        'It is written: Man does not live on bread alone, but on every word that comes from the mouth of God.',

        'You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled by men.',

        'Let your light shine before men, that they may see your good deeds and praise your father in heaven.',

        'Do not think that I have come to abolish the Law or the Prophets; I have not come to abolish them but to fulfill them.',

        'Whoever has will be given more; whoever does not have, even what he has will be taken from him.',

        'Be careful not to do your acts of righteousness before men, to be seen by them. If you do, you will have no reward from your Father in heaven.',

        'But when you pray, go into your room, close the door and pray to your Father, who is unseen. Then your Father who sees what is done in secret will reward you.',

        'If you forgive men when they sin against you, your heavenly Father will also forgive you.',

        'Do not store up for yourselves treasures on earth, where moth and rust destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven, where moth and rust do not destroy, and where thieves do not break in and steal. For where your treasure is, there your heart will be also.',

        'Only in his hometown, among his relatives and in his own house is a prophet without honor.',

        'Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more important than food, and the body more important than clothes?',

        'Who of you by worrying can add a single hour to his life?',

        'Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.',

        'Do not judge, or you too will be judged.',

        "Why do you look at the speck in of sawdust in your brother's eye and pay no attention to the plank in your own eye?",

        'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.',

        'If you, then, though you are evil, know how to give good gifts to your children, how much more will your Father in heaven give good gifts to those who ask him!',

        "Watch out that no one deceives you. For many will come in my name, claiming 'I am the Christ', and will deceive many.",

        'Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it.',

        "Watch out for false prophets. They come to you in sheep's clothing, but inwardly they are ferocious wolves.",

        'Take heart son, your sins are forgiven.',

        'Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.',

        'Whoever disowns me before men, I will disown him before my Father in heaven.',

        'Whoever finds his life will lose it, and whoever loses his life for my sake will find it.',

        'Come to me, all you who are weary and burdened, and I will give you rest.',

        'Make a tree good and its fruit will be good, or make a tree bad and its fruit will be bad, for a tree is recognized by its fruit.',

        'For whoever does the will of my Father in heaven is my brother and sister and mother.',

        'The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.',

        'These people honor me with their lips, but their hearts are far from me. They worship me in vain; their teachings are but rules taught by men.',

        'If anyone would come after me, he must deny himself and take up his cross and follow me.',

        "Because you have so little faith. I tell you the truth, if you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there' and it will move. Nothing is impossible for you.",

        'Come with me by yourselves to a quiet place and get some rest.',

        'Love the Lord your God will all your heart and with all your soul and with all your mind.',

        'Love your neighbor as yourself.',

        'So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.',

        'Because of the increase of wickedness, the love of most will grow cold, but he who stands firm to the end will be saved.',

        'But I tell you: Love your enemies and pray for those who persecute you, that you may be sons of your Father in heaven. He causes his sun to rise on the evil and the good, and sends rain on the righteous and unrighteous.',

        'No one can serve two masters. Either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve both God and money.',

        'What do you think? If a man owns a hundred sheep, and one of them wanders away, will he not leave the ninety-nine on the hills and go to look for the one that wandered off?',

        'But I tell you who hear me: Love your enemies, do good to those who hate you, bless those who curse you, pray for those who mistreat you.',

        'Give to everyone who asks you, and if anyone takes what belongs to you, do not demand it back.',

        'Whoever welcomes one of these little children in my name welcomes me; and whoever welcomes me does not welcome me but the one who sent me.',

        'Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.',

        'I tell you the truth, anyone who will not receive the kingdom of God like a little child will never enter it.',

        'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',

        'Go into all the world and preach the good news to all creation.',

        'Abba, Father, everything is possible for you. Take this cup from me. Yet not what I will, but what you will.',

        'When the dead rise, they will neither marry nor be given in marriage; they will be like the angels in heaven.',

        'All men will hate you because of me, but he who stands firm to the end will be saved.',

        'At that time men will see the Son of Man coming in clouds with great power and glory.',

        'I must preach the good news of the kingdom of God to the other towns also, because that is why I was sent.',

        'Blessed are you who are poor, for yours is the kingdom of God.',
    ]
    console.log(Math.random(4) % quotes.length)
    quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
})
