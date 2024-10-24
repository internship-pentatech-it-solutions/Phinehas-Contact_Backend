const express = require("express");
const CONTACT = require("../model/contactModel");
const mongoose = require("mongoose");

const getContact = async (request, response) => {
  try {
    const data = await CONTACT.find();
    response.send(data);
  } catch (error) {
    response.send(error.message);
  }
};

const getContactById = async (request, response) => {
  try {
    const { id } = request.params;
    const getByData = await CONTACT.findById(id);
    if (getByData) {
      return response.send(getByData);
    } else {
      return response.send(`No data with that ID format found`);
    }
  } catch (error) {
    return response.send(error.message);
  }
};

const postContact = async (request, response) => {
  const sentContact = request.body;
  const findUser = await CONTACT.findOne(sentContact);
  if (findUser) {
    return response.send(`Contact already exists`);
  }
  try {
    const postData = await CONTACT.create(sentContact);
    response.status(201).send(postData);
  } catch (error) {
    response.status(401).send(error.message);
  }
};

const updateName = async (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.send(`Invalid ID format`);
    }
    const nameToUpdate = { name };
    const updateGivenName = await CONTACT.findByIdAndUpdate(id, nameToUpdate, {
      new: true,
    });
    if (updateGivenName) {
      return response.send(updateGivenName);
    } else {
      return response.send(`Update error`);
    }
  } catch (error) {
    response.send(error.message);
  }
};

const updateMobile = async (request, response) => {
  const { id } = request.params;
  const { mobile } = request.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.send(`Invalid ID format`);
    }
    const nameToUpdate = { mobile };
    const updateGivenName = await CONTACT.findByIdAndUpdate(id, nameToUpdate, {
      new: true,
    });
    if (updateGivenName) {
      return response.send(updateGivenName);
    } else {
      return response.send(`Update error`);
    }
  } catch (error) {
    response.send(error.message);
  }
};

const updateDescription = async (request, response) => {
  const { id } = request.params;
  const { description } = request.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.send(`Invalid ID format`);
    }
    const nameToUpdate = { description };
    const updateGivenName = await CONTACT.findByIdAndUpdate(id, nameToUpdate, {
      new: true,
    });
    if (updateGivenName) {
      return response.send(updateGivenName);
    } else {
      return response.send(`Update error`);
    }
  } catch (error) {
    response.send(error.message);
  }
};

const updateEmail = async (request, response) => {
  const { id } = request.params;
  const { email } = request.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.send(`Invalid ID format`);
    }
    const nameToUpdate = { email };
    const updateGivenName = await CONTACT.findByIdAndUpdate(id, nameToUpdate, {
      new: true,
    });
    if (updateGivenName) {
      return response.send(updateGivenName);
    } else {
      return response.send(`Update error`);
    }
  } catch (error) {
    response.send(error.message);
  }
};

const deleteContact = async (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.send(`Invalid ID format`);
  }
  try {
    const deleteById = await CONTACT.findByIdAndDelete(id);
    if (deleteById) {
      return response.send(deleteById);
    } else {
      response.send(`Error deleting`);
    }
  } catch (error) {
    return response.send(error.message);
  }
};

module.exports = {
  getContact,
  getContactById,
  postContact,
  updateName,
  updateEmail,
  updateMobile,
  updateDescription,
  deleteContact,
};
