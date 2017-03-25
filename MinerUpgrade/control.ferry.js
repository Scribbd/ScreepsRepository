var controlFerry = {
    
    run: function() {
        
        
        if(Memory.ferryControl == null) {
            console.log('Setting up ferryControl for the first time');
            Memory.ferryControl = {
                'ferries': {},
                'priorityQueue': [],
            }
        }
        
        
    }
};

module.exports = controlFerry;