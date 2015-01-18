# Framework - Session

## 1. Overview

A session is the central piece of information that all 
other areas of the framework pivot around. A *session* is 
more succinctly defined below in the *Definitions* section.

For general purpose a *session* is a key moment or interaction
between the owner of the session and a client. A session may also
contain 0-n *action items*. *Action items* are sub-event that are
are needed to be handled in-order for the session to be considered
_complete_.

*Definitions*
* Session - A container that holds one or more actions.  
Example is a scheduled workout that could result in a post-ride analysis, workout review, follow-up call, etc.
* Action Item - Any activity performed by the coach.  
Examples of these include: post-event analysis, reminder to contact a client

## 2. Technical Details
### 2.1 Requirements
### 2.2 API
#### 2.2.1 Session Model
The schema of the session model.
* Session
  * Owner
  * Participate 
  * Type
  * Date
  * Status
  * Action Items
    * Action Item
    * Type
    * Title
    * Status
    * Due Date
    * Completion Date
    * Notes
      * Note
  * Notes
    * Note

#### 2.2.2 Session Business Layer.

*SessionManager* - The business logic (agnostic to view) for managing
*sessions*. The API provides the ability to query, retrieve, update, and
delete *sessions*. It will also do any necessary validation of the *session*
model before persisting out the model to the data source.

#### 2.2.3 Session Data Access.

*DataSource* - The session model will currently be serialized out in *JSON*
format to the local *PouchDB* instance. The *PouchDB* instance
will be setup to [replicate](http://pouchdb.com/api.html#replication)
to the centrally hosted *CouchDB* instance. This provides the *framework*
with the unique feature of being able to function completely _offline_.

### 2.3 Alternatives and Considerations.

The combination of *CouchDB* and *PouchDB* is being considered for the data 
persistence layer. This combination provides the *framework* with the ability
to continue to work with almost complete functionality even if the consumer
does not have an internet connection.

*TODO* finish pulling in information from the "Technical Survey".

## 3. Third Party Software

* PouchDB - http://pouchdb.com/api.html
  * Apache License - https://github.com/pouchdb/pouchdb/blob/master/LICENSE
* CouchDB - http://couchdb.apache.org/
  * Apache License - http://www.apache.org/licenses/LICENSE-2.0