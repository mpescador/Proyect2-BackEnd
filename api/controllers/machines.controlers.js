const { machineModel } = require('../models/machines.model')

function addMachine (req, res) {
  machineModel
    .create(req.body)
    .then(machine => res.status(200).json(machine))
    .catch(err => res.status(500).json({ msg: 'Error creating machine or vehicle', err }))
}

function getAllMachines (req, res) {
  machineModel
    .find()
    .then(machines => res.status(200).json(machines))
    .catch(err => res.status(500).json({ msg: 'Error', err }))
}

function getMachineById (req, res) {
  machineModel
    .findById(req.params.id)
    .then(machine => res.status(200).json(machine))
    .catch(err => res.status(500).json({ msg: 'Error', err }))
}

function getMachineByStatus (req, res) {
  machineModel
    .find(req.params.busy)
    .then(machines => {
      res.status(200).json(machines)
    })
    .catch(err =>
      res.status(500).json({ msg: 'Error', err })
    )
}

module.exports = {
  addMachine,
  getAllMachines,
  getMachineByStatus,
  getMachineById
}
