var helperVisuals = require('helper.visuals');

/**
 * Respawn control. v1, limited to one home.
 */
var controlRespawn = {
    run: function() {
        // Not needing action
        if(Memory.respawnQueue == null) {
            Memory.respawnQueue = {};
        }
        
        if(Object.keys(Memory.respawnQueue).length > 0) {
            for(var death in Memory.respawnQueue) {
                var respawnStatus = Game.spawns['Home'].canCreateCreep([WORK, CARRY, MOVE], Memory.respawnQueue[death]);
                if(respawnStatus == OK) {
                    helperVisuals.showNextToRoomObject(Game.spawns['Home'], Memory.respawnQueue[death]);
                    delete Memory.respawnQueue[death];
                }
                else if (respawnStatus == ERR_NOT_ENOUGH_ENERGY) {
                    Game.spawns['Home'].createCreep([WORK, CARRY, MOVE], death, {role: Memory.respawnQueue[death]});
                    helperVisuals.showNextToRoomObject(Game.spawns['Home'], 'O_o No Power!');
                }
                else if (respawnStatus == ERR_BUSY) {
                    helperVisuals.showNextToRoomObject(Game.spawns['Home'], '>.< Busy!!');
                }
                else {
                    console.log('Cannot respawn! ', respawnStatus)
                }
            }
        }
    }
};

module.exports = controlRespawn;