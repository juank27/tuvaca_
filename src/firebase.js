require("dotenv").config(); //Importar variables de entorno

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require('firebase-admin/firestore');


initializeApp({
	credential: applicationDefault()
	// "type": "service_account",
	// "project_id": "tuvaca-ce478",
	// "private_key_id": "a1b61bb65409bf372b95dd886736f46cffea3758",
	// "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5tMzkjRmhN8Ae\nkJ46ZNGAYJaDyC3a0GHA9mEEMy5xYgAHAzjm9mbYD9ZloO3JdKjfa0oMbzZSae+1\nzV5Sl4/KnZBLVRu+iJQn/Ku/hGcla9NspPV6ke7OvLTbNLB0RIFVvwLM8OC8i76s\npQBT4IJ3mi+TCrrjQcmJqK893sruWDSwa2MPKiD/N1A0mZ2Qi0hVRyjVm7eJKb2H\n+t89ivoVnXHczkICoQFYaNgTM36EpsBGjwB/Skg9hI31/SmLYARL64oj61gL+rPq\nzr8Fj/rQX7KFME+KQ2OFb9G015+hdzRmiA3Cey0CppDky3sqS3j+FmMcJxvZWbFD\nH5SjfMwhAgMBAAECggEAGbhABbTCb0uothL9dxpDfG45f7hCcY3EHCouDEYyZnhW\nMffGR7v/SRQDHkGIQrXU4FdHAtXcRinEjf9gKDw0KVxigax15+ZD7riAk5540qaj\nujur1p/43R/RmefVkHofF4sZjjIbo2wPVRs9ImDJG7DPv05lzS0YBpLFl+IQD6u2\nuvs6U4X0ewUCpGaXF4L0l8vIqYG3hZ4SVEBD/hlTe5wubKbGdlBd7XHns/qPCySX\naInZHnP82aFT78Bk/4WRIB6UCN1Q5dvc7yCl1Dxg3ttLZQdML/BwEBiCY4k9/olS\nz3NaMBUdlHd1bo+9HvzSwI1xZPOh1krNeKjpowSWKQKBgQD7I1GWm9c/Xcm1j8k4\nrdChiYcMa2ns4yAk4WsriEvoi+w3RBHTN7dqD86K/AotU7XgiJn8wxXowj+te4Ao\nZXhDVBrD8/4ChQKEnyXs32zRMUFKANbaUPJP3ZRzuKFAskIkJuIFqPCENIJVeCMP\nbtu1t8aWEvatyjKIRgS9yFHZFwKBgQC9TTD24tD92EpNTkSEAFxotOnIqxwe3cL5\nedTe3nGVqFAOGsLZyZKoqaYO4BSkkjfR9x6nVGto2yiEA3URPuDVvDNCQ4TkK29Q\nz9E4TGUqsjLvD4boVllxp5PYsOFIW8ZonmQoJ9n11VBPCQH3+wKoVD002pEhFSut\n8Iijo6fXhwKBgASjAEyhj/XRi3nYr8RmISX6Xg3ypcAD6YIEz2+8Unp2quPSU+ns\na2x/4jZatO1lUERXAVDTYUIs4/QWBaW5SeEkWmInzRbK0eMU9SRMc7vhBu2Q2map\ne+/RjX4deIyzPdlhBmdIWTh3p7hgQXV1fIT8YaQ/sWJAC3LMqCXA3xH9AoGAKr2b\n+ZI6l6XXGN88DwW515ZJVppzrfBqDkPYsT1OLfkjohuetOeTKmurZ55masXsvoZq\nMGOaIMGiwzO4od0tjHSCqkpuXcoExx004t401VAIufsqfZjJdyTb98fwBZNbF9Hz\nUTG2P5AbIs0o2aGd9v2WGDHlJLAP/aTaZQAVbE8CgYB+Ym8GCCjzhA9S1BHejBJg\nWmu2/pykRaS2sMMVwk/XSzD67lBEnmQqN2XuR5LmmALg78ZbjTC1OkKsrSAoZO/n\nVJ6SKPNVD9Oaz7uG0ISj80nzrHvNURjYSto81jSUOxnlccNQ5bybx4t4suYePqLy\nlXwHEpE4s0vywt8miFxJVQ==\n-----END PRIVATE KEY-----\n",
	// "client_email": "firebase-adminsdk-v1qp4@tuvaca-ce478.iam.gserviceaccount.com",
	// "client_id": "100686850819870068000",
	// "auth_uri": "https://accounts.google.com/o/oauth2/auth",
	// "token_uri": "https://oauth2.googleapis.com/token",
	// "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	// "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v1qp4%40tuvaca-ce478.iam.gserviceaccount.com"
})
console.log("🚀 ~ file: firebase.js ~ line 8 ~ initializeApp", initializeApp)

const db = getFirestore();

module.exports = {
	db,
}