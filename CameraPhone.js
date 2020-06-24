phone = false;
frontCam = false;
phonetype = 3;

//takePhoto = 0xa67c35c56eb1bd9d;
//wasPhotoTaken = 0x0d6ca79eeebd8ca3;
//savePhoto = 0x3dec726c25a11bac;
//clearPhoto = 0xd801cc02177fa3f1;

function cellFrontCamActivate(activate) {
    return mp.game.invoke('0x2491A93618B7D838', activate);
}

mp.events.add('render', () => {

        //открываем телефон и камеру (забиндил на "О" пока что, подправишь под свой функционал)
        if (mp.keys.isDown(79)) {
            mp.game.mobile.createMobilePhone(phonetype);
            mp.game.mobile.cellCamActivate(true, true);
            phone = true;
        }
        
        //закрываем телефон (также забиндил на бэкспейс, подправишь)
        if (mp.keys.isDown(8) && phone == true) {
            mp.game.invoke('0x3BC861DF703E5097', mp.players.local.handle, true);
            mp.game.mobile.cellCamActivate(false, false);
            phone = false;
        }

        //селфи режим бэкслэш
        if (mp.keys.isDown(220) && phone == true) {
            frontCam = !frontCam;
            cellFrontCamActivate(frontCam);
        }

        //сделать фотографию ентер
        if (mp.keys.isDown(13) && phone == true) {
            mp.game.invoke('0xa67c35c56eb1bd9d', true);
            if (mp.game.invoke('0x0d6ca79eeebd8ca3') == 1 && mp.game.invoke('0x3dec726c25a11bac') == false) {
                mp.game.invoke('0xd801cc02177fa3f1');
            }
        }

        if (phone == true) {
            //тут нужно скрыть HUD
        }
        
});