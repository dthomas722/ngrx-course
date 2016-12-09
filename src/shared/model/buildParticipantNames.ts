

import {Thread} from "./thread";
import * as _ from 'lodash';
import {dbParticipants} from "../../server/db/db-data";



export function buildParticipantNames(thread:Thread) {

    const participantIds = _.keys(thread.participants);

    return _.join(participantIds.map(id => dbParticipants[id].name), ', ');
}