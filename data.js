

mathf11a = {'name':'MATH F111','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
mathf11b = {'name':'MATH F111','days':'M W Th','timestart':17,'timeend':18,'location':'LT2','type':'l'};
mathf11c = {'name':'MATH F111','days':'T Th F','timestart':11,'timeend':12,'location':'LT4','type':'l'};
mathf11d = {'name':'MATH F111','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
mathf11e= {'name':'MATH F111','days':'Th','timestart':13,'timeend':9,'location':'A605','type':'t'};
mathf11f= {'name':'MATH F111','days':'Th','timestart':16,'timeend':9,'location':'LT4','type':'t'};
mathf11g = {'name':'MATH F111','days':'F','timestart':5,'timeend':9,'location':'A602','type':'t'};
mathf111_list = [mathf11a, mathf11b, mathf11c, mathf11d, mathf11e, mathf11f, mathf11g];

chemf11a = {'name':'CHEM F111','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
chemf11b = {'name':'CHEM F111','days':'M W Th','timestart':17,'timeend':18,'location':'LT2','type':'l'};
chemf11c = {'name':'CHEM F111','days':'T Th F','timestart':11,'timeend':12,'location':'LT4','type':'l'};
chemf11d = {'name':'CHEM F111','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
chemf11e= {'name':'CHEM F111','days':'Th','timestart':13,'timeend':9,'location':'A605','type':'t'};
chemf11f= {'name':'CHEM F111','days':'Th','timestart':11,'timeend':9,'location':'LT4','type':'t'};
chemf11g = {'name':'CHEM F111','days':'F','timestart':13,'timeend':9,'location':'A602','type':'t'};
chemf111_list = [chemf11a,chemf11b,chemf11c,chemf11d,chemf11e,chemf11e,chemf11f,chemf11g];

pnsa = {'name':'PNS F113','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
pnsb = {'name':'PNS F113','days':'M W Th','timestart':17,'timeend':18,'location':'LT2','type':'l'};
pnsc = {'name':'PNS F113','days':'T Th F','timestart':11,'timeend':12,'location':'LT4','type':'l'};
pnsd = {'name':'PNS F113','days':'M W F','timestart':16,'timeend':10,'location':'LT4','type':'l'};
pnse= {'name':'PNS F113','days':'Th','timestart':13,'timeend':9,'location':'A605','type':'t'};
pnsf= {'name':'PNS F113','days':'Th','timestart':15,'timeend':9,'location':'LT4','type':'t'};
pnsg = {'name':'PNS F113','days':'F','timestart':12,'timeend':9,'location':'A602','type':'t'};
pns_list = [pnsa,pnsb,pnsc,pnsd,pnse,pnsf,pnsg];

biof11a = {'name':'BIO F111','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
biof11b = {'name':'BIO F111','days':'M W Th','timestart':17,'timeend':18,'location':'LT2','type':'l'};
biof11c = {'name':'BIO F111','days':'T Th F','timestart':11,'timeend':12,'location':'LT4','type':'l'};
biof11d = {'name':'BIO F111','days':'M W F','timestart':16,'timeend':10,'location':'LT4','type':'l'};
biof11e= {'name':'BIO F111','days':'Th','timestart':18,'timeend':9,'location':'A605','type':'t'};
biof11f= {'name':'BIO F111','days':'Th','timestart':19,'timeend':9,'location':'LT4','type':'t'};
biof11g = {'name':'BIO F111','days':'F','timestart':20,'timeend':9,'location':'A602','type':'t'};
biof111_list = [biof11a,biof11b,biof11c,biof11d,biof11e,biof11e,biof11f,biof11g];

trwf110a = {'name':'TRW F111','days':'M W F','timestart':9,'timeend':10,'location':'LT4','type':'l'};
trwf110b = {'name':'TRW F111','days':'M W Th','timestart':17,'timeend':18,'location':'LT2','type':'l'};
trwf110c = {'name':'TRW F111','days':'T Th F','timestart':11,'timeend':12,'location':'LT4','type':'l'};
trwf110d = {'name':'TRW F111','days':'M W F','timestart':13,'timeend':10,'location':'LT4','type':'l'};
trwf110_list = [trwf110a,trwf110b,trwf110c,trwf110d];
course = [mathf111_list,chemf111_list,pns_list,biof111_list,trwf110_list];
module.exports = { course: course};
