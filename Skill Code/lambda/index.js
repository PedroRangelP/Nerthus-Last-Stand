// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// Licensed under the Amazon Software License
// http://aws.amazon.com/asl/

/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const HELP = "Para intentar de nuevo, di: reiniciar juego, para salir, di: terminar juego"
const DEFAULT_REPROMPT = "A la espera de ordenes capit�n";
const GOODBYE = "Hasta la pr�xima capit�n";
const END_GAME = "Misi�n fallida, para intentar de nuevo, di: reiniciar juego, para salir, di: terminar juego";
const INTRODUCTION = "<speak>" + 
            "<audio src='soundbank://soundlibrary/scifi/amzn_sfx_scifi_alarm_02'/>" +
            "<prosody volume='x-loud'>Alerta! </prosody>" +
            "<break time='0.5s'/>" +
            "La IA del sistema ha detectado una brecha espacio temporal cerca de la nave, iniciando protocolo de emergencia. " +
            "<break time='0.5s'/>" +
            "Reanimando a la tripulaci�n. " +
            "<audio src='soundbank://soundlibrary/doors/doors_high_tech/high_tech_07'/>" +
            "Bienvenido de nuevo capit�n, " +
            "iniciando informe de estado: " +
            "<prosody volume='loud'>El sistema de curso ha sido alterado. </prosody>" +
            "<p>Paradero: <prosody rate='slow' volume='x-soft'>desconocido, </prosody></p>" +
            "aproxim�damente a 450822 millones de p�rsecs de distancia del sector interstelar m�s cercano, " +
            "han transcurrido 3954 a�os desde que se inici� el proceso de desfase temporal. " +
            "<p><prosody rate='fast' >M�ltiples entidades hostiles se dirigen a la nave, </prosody></p>" +
            "<prosody rate='fast' volume='x-loud'>�deseas iniciar el protocolo de defensa? </prosody>" +
    "</speak>";


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
      || (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'ReturnHomeIntent');
  },
  handle(handlerInput) {
    const speechText = INTRODUCTION;
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(HELP)
      .getResponse();
  },
};

const FallbackSimulation = {
    canHandle(handlerInput){
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FallbackSimulation';
    },
    handle(handlerInput) {
        const speakOutput = 'No entiendo, repita la orden capit�n';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ProtocoloDefensaSi = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ProtocoloDefensaSi';
  },
  handle(handlerInput) {
    const speechText = "<speak>" +
        "<prosody  volume='x-loud'>Iniciando el protocolo de defensa. </prosody>" +
        "<prosody volume='x-loud' rate='110%' pitch='+30%'>Las entidades </prosody><prosody volume='x-loud' rate='110%' pitch='+10%'>han entrado en rango para abordar la nave desde el sector</prosody> este." +
        "<audio src='soundbank://soundlibrary/explosions/explosions/explosions_14'/>" +
        "La reactivaci�n de los sistemas de contenci�n requiere autorizaci�n simult�nea del comandante de defensa y el capit�n de la nave, el comandante de defensa se encuentra en la cubierta 4 en el sector sur. <prosody pitch='+30%'>Puedo asistirlo en el camino. </prosody>"+ 
        "Llegando a la cubierta central, desea tomar el camino a trav�s del ala este, <prosody volume='x-loud'>u</prosody>, oeste?"+
        "<audio src='soundbank://soundlibrary/air/steam/steam_13'/>"+
    "</speak>";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const ProtocoloDefensaNo = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ProtocoloDefensaNo';
  },
  handle(handlerInput) {
    const speechText = "<speak>" +
        "<prosody pitch='+30%'>M�ltiples da�os en la cubierta y en los motores principales, la nave se encuentra en estado cr�tico. N�cleo entrando en proceso de fisi�n en</prosody><prosody pitch='+30%'> <emphasis level='strong'>3, 2, 1.</emphasis></prosody>"+
        "<audio src='soundbank://soundlibrary/explosions/explosions/explosions_11'/>"+
        "<break time='1.5s'/>" +
        "Misi�n fallida, para intentar de nuevo, di: reiniciar juego, para salir, di: terminar juego"+
    "</speak>";
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const EsteIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EsteIntent';
  },
  handle(handlerInput) {
    const speechText = "<speak>"+
        "<p><prosody volume='x-loud'>Avanzando. </prosody></p>"+
        "<prosody volume='x-loud'>Alerta! </prosody>"+
        "<prosody volume='x-loud'>Entidad detectada </prosody>"+
        "<prosody rate='fast'>100 metros, 72 metros, </prosody><prosody rate='x-fast'>50 metros, 24 metros, 8 metros.</prosody>"+
        "<audio src='soundbank://soundlibrary/computers/screens/screens_09'/>"+
        "<audio src='soundbank://soundlibrary/monsters/aliens/aliens_03'/>"+
        "<audio src='soundbank://soundlibrary/monsters/aliens/aliens_04'/>"+
        "<break time='1.5s'/>" +
        "Misi�n fallida, para intentar de nuevo, di: reiniciar juego, para salir, di: terminar juego"+
    "</speak>";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const OesteIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'OesteIntent';
  },
  handle(handlerInput) {
    const speechText = "<speak>"+
        "Avanzando por el ala oeste, llegando a la cubierta sur en menos de un minuto. "+
        "Sistemas de navegaci�n, <prosody volume='x-loud' pitch='+10%'>reiniciados, actualizaci�n, </prosody>la especie alien�gena ha sido identificada. Clase, Vaikundar, altamente agresiva y peligrosa, cuenta con una velocidad excepcional pero un olfato deficiente. Realizando escaneo en la cubierta 4, entidades biol�gicas hostiles detectadas. Sus opciones son alejarse, o, esconderse, <prosody volume='x-loud'>que</prosody> decide?"+   
    "</speak>";


    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const EsconderseIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EsconderseIntent';
  },
  handle(handlerInput) {
    const speechText = "<speak>"+
        "Aislando sector. "+
        "<audio src='soundbank://soundlibrary/doors/doors_high_tech/high_tech_10'/>"+
        "<prosody volume='x-soft'> Entidad en proximidades peligrosas, </prosody>"+
        "<amazon:effect name='whispered'>se recomienda mantener la calma. </amazon:effect>"+
        "<audio src='soundbank://soundlibrary/footsteps/metal/metal_14'/>"+
        "<audio src='soundbank://soundlibrary/monsters/aliens/aliens_03'/>"+
        "<audio src='soundbank://soundlibrary/footsteps/metal/metal_14'/>"+
        "<amazon:effect name='whispered'>Entidad alej�ndose, </amazon:effect>"+
        "<prosody volume='soft'> es seguro salir. </prosody>"+
        "Procediendo a la cubierta 4. Tenemos que apresurarnos, el ox�geno de la nave est� alcanzando niveles cr�ticos. "+
        "<prosody volume='x-loud' pitch='+20%' rate='110%'>El comandante ha ca�do. El protocolo de contenci�n ha fallado, </prosody><prosody volume='x-loud' pitch='+30%' rate='110%'>recalculando opciones. </prosody>"+
        "<audio src='soundbank://soundlibrary/office/amzn_sfx_copy_machine_02'/>"+
        "<prosody volume='x-loud' pitch='+20%' rate='100%'>Detonar la nave en este instante para eliminar entidades hostiles, </prosody>"+
        "<prosody volume='x-loud' pitch='+20%' rate='100%'>o, </prosody>"+
        "<prosody volume='x-loud' pitch='+20%' rate='100%'>existe una m�nima posibilidad de que logre evacuar a los tripulantes restantes e iniciar la detonaci�n de la nave de forma manual y no hay vuelta atr�s, </prosody>"+
        "<prosody volume='x-loud' pitch='+20%' rate='100%'>por lo que usted se tiene que sacrificar. </prosody>"+
        "<emphasis level='reduced'><prosody pitch='+20%' rate='100%'>Detonar la nave, o, evacuar, su decisi�n capit�n.</prosody></emphasis>"+
    "</speak>";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const AlejarseIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AlejarseIntent';
  },
  handle(handlerInput) {
    const speechText = "<speak>"+
        "<prosody volume='x-loud'>La criatura ha detectado su presencia </prosody>"+
        "<prosody volume='x-loud'>y se acerca a gran velocidad: </prosody>"+
        "<prosody rate='fast'>100 metros, 72 metros,</prosody><prosody rate='x-fast'> 50 metros, 24 metros, 8 metros.</prosody>"+
        "<audio src='soundbank://soundlibrary/computers/screens/screens_09'/>"+
        "<audio src='soundbank://soundlibrary/monsters/aliens/aliens_03'/>"+
        "<audio src='soundbank://soundlibrary/monsters/aliens/aliens_04'/>"+
        "<break time='1.5s'/>" +
        "Misi�n fallida, para intentar de nuevo, di: reiniciar juego, para salir, di: terminar juego"+
    "</speak>";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const DetonarIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DetonarIntent';
  },
  handle(handlerInput) {
    const speechText = "<speak>"+
        "<prosody pitch='+30%'>Ejecutando autodestrucci�n, n�cleo entrando en proceso de fisi�n en,</prosody><prosody pitch='+30%'> <emphasis level='strong'>3, 2, 1.</emphasis></prosody>"+
        "<audio src='soundbank://soundlibrary/explosions/explosions/explosions_11'/>"+
        "<break time='1.5s'/>" +
        "Gracias por jugar Nerthus Last Stand"+
    "</speak>";

    return handlerInput.responseBuilder
      .speak(speechText)
      //.reprompt(DEFAULT_REPROMPT)
      .withShouldEndSession(true)
      .getResponse();
  },
};

const EvacuarIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'EvacuarIntent';
  },
  handle(handlerInput) {
    const speechText = "<speak>"+
        "La evacuaci�n ha sido realizada exitosamente, iniciando proceso de detonaci�n, n�cleo entrando en proceso de fisi�n en"+
        "<p> <prosody pitch='low' rate='slow'> 3</prosody></p>"+
        "<p> <prosody pitch='low' rate='slow'> 2</prosody></p>"+
        "<p> <prosody pitch='low' rate='slow'> 1. </prosody></p>"+
        "<amazon:effect name='whispered'>Lo siento.</amazon:effect>"+
        "<audio src='soundbank://soundlibrary/explosions/explosions/explosions_11'/>"+
        "<break time='1.5s'/>" +
        "Gracias por jugar Nerthus Last Stand"+
    "</speak>";

    return handlerInput.responseBuilder
      .speak(speechText)
      //.reprompt(DEFAULT_REPROMPT)
      .withShouldEndSession(true)
      .getResponse();
  },
};


const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP)
      .reprompt(HELP)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(GOODBYE)
      .withShouldEndSession(true)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ReiniciarIntent = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ReiniciarIntent';
  },
  handle(handlerInput) {
    const speechText = INTRODUCTION;

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(DEFAULT_REPROMPT)
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ProtocoloDefensaSi,
    ProtocoloDefensaNo,
    EsteIntent,
    OesteIntent,
    AlejarseIntent,
    EsconderseIntent,
    DetonarIntent,
    EvacuarIntent,
    HelpIntentHandler,
    FallbackSimulation,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    ReiniciarIntent
  )
  .lambda();