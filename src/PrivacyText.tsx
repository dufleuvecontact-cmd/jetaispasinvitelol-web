import React from 'react';
import { useLanguage } from './LanguageContext';

export default function PrivacyText() {
  const { lang } = useLanguage();

  if (lang === 'fr') {
    return (
      <div className="terms-content" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", lineHeight: "1.6", textAlign: "left" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>POLITIQUE DE CONFIDENTIALITÉ</h3>
        <p style={{ fontWeight: "bold", marginBottom: "24px" }}>Dernière mise à jour : 4 juin 2026</p>
        
        <p style={{ marginBottom: "16px" }}>@jetaispasinvitelol est exploité par Salome Campos, propriétaire unique, basée à Québec, Québec, Canada.</p>
        <p style={{ marginBottom: "24px" }}>Cette politique explique quelles informations personnelles nous recueillons, pourquoi nous les recueillons, comment nous les utilisons et quels sont vos droits. Nous prenons votre vie privée au sérieux et nous nous conformons à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (Loi 25) et à la Loi canadienne anti-pourriel (LCAP).</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>1. RESPONSABLE DE LA PROTECTION DE LA VIE PRIVÉE</h4>
        <p style={{ marginBottom: "16px" }}>Conformément à la Loi 25 du Québec, la personne responsable de la protection des renseignements personnels détenus par cette organisation est :</p>
        <p style={{ marginBottom: "16px", fontWeight: "bold" }}>
          Salome Campos<br />
          Courriel : dufleuvecontact@gmail.com<br />
          Québec, Québec, Canada
        </p>
        <p style={{ marginBottom: "24px" }}>Toutes les questions relatives à la vie privée, les demandes d'accès et les plaintes doivent être adressées au courriel ci-dessus.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>2. CE QUE NOUS RECUEILLONS</h4>
        <p style={{ marginBottom: "16px" }}>Nous recueillons les renseignements personnels suivants selon la façon dont vous interagissez avec nous :</p>
        
        <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Lorsque vous achetez un billet (via Stripe) :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Nom complet</li>
          <li>Adresse courriel</li>
          <li>Informations de carte de paiement (traitées et stockées par Stripe, non par nous)</li>
          <li>Montant et date de la transaction</li>
          <li>Adresse IP</li>
          <li>Horodatage de l'acceptation des conditions</li>
        </ul>

        <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Lorsque vous acceptez la décharge de l'événement :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Nom complet</li>
          <li>Adresse courriel</li>
          <li>Numéro de téléphone</li>
          <li>Date de naissance</li>
          <li>Signature numérique</li>
          <li>Horodatage de l'accord</li>
        </ul>

        <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Lorsque vous vous inscrivez aux mises à jour SMS (via Klaviyo) :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Numéro de téléphone</li>
          <li>Horodatage du consentement</li>
          <li>Méthode de consentement (comment vous vous êtes inscrit)</li>
        </ul>

        <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Lorsque vous visitez notre site Web :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Numéro de téléphone (stocké dans Firebase)</li>
          <li>Informations de base sur l'appareil et le navigateur</li>
          <li>Pages visitées et temps passé</li>
        </ul>

        <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Lorsque vous nous contactez via les DM Instagram :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
          <li>Votre nom d'utilisateur Instagram</li>
          <li>Le contenu de vos messages</li>
        </ul>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>3. POURQUOI NOUS LE RECUEILLONS</h4>
        <p style={{ marginBottom: "16px" }}>Nous recueillons des renseignements personnels uniquement aux fins suivantes :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li><strong>Vente de billets et traitement des paiements.</strong> Pour traiter votre achat, vous envoyer une confirmation et conserver des registres de transactions comme l'exige la loi.</li>
          <li><strong>Sécurité de l'événement et conformité.</strong> Pour vérifier votre âge, faire respecter les conditions de l'événement, maintenir un registre de présence et vous contacter en cas d'urgence ou de changement d'événement.</li>
          <li><strong>Documentation de décharge.</strong> Pour conserver une trace que vous avez accepté les conditions de notre événement en tant que protection légale pour vous et l'organisateur.</li>
          <li><strong>Marketing SMS.</strong> Pour vous envoyer des annonces concernant les événements à venir. Seulement si vous y avez explicitement consenti. Vous pouvez vous désinscrire à tout moment.</li>
          <li><strong>Soutien à la clientèle.</strong> Pour répondre à vos questions ou préoccupations envoyées via Instagram ou par courriel.</li>
          <li><strong>Obligations légales.</strong> Pour se conformer aux exigences fiscales, comptables et autres obligations légales en vertu des lois québécoises et canadiennes.</li>
        </ul>
        <p style={{ marginBottom: "24px" }}>Nous ne recueillons aucun renseignement personnel à d'autres fins que celles énumérées ci-dessus.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>4. CONSENTEMENT</h4>
        <p style={{ marginBottom: "16px" }}>Nous recueillons vos renseignements personnels uniquement avec votre consentement.</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li><strong>Achats de billets :</strong> En effectuant un achat via Stripe, vous consentez à la collecte de vos informations de paiement et de contact dans le but de traiter votre transaction.</li>
          <li><strong>Accord de décharge :</strong> En cochant la case de la décharge et en fournissant vos informations, vous consentez à la collecte et à la conservation de vos données de décharge.</li>
          <li><strong>Inscription SMS :</strong> En entrant votre numéro de téléphone et en vous inscrivant via notre formulaire Klaviyo, vous donnez votre consentement exprès pour recevoir des messages électroniques commerciaux (annonces d'événements) par SMS.</li>
          <li><strong>Navigation sur le site Web :</strong> En utilisant notre site Web, vous consentez à la collecte de données de navigation de base stockées via Firebase.</li>
        </ul>
        <p style={{ marginBottom: "16px" }}>Vous pouvez retirer votre consentement à tout moment en nous contactant à dufleuvecontact@gmail.com.</p>
        <p style={{ marginBottom: "24px" }}><strong>Pour les participants de moins de 18 ans :</strong> Si vous avez moins de 18 ans, en fournissant vos renseignements personnels, vous déclarez que votre parent ou tuteur légal est au courant que vous partagez ces renseignements avec nous et qu'il ne s'y oppose pas. Nous ne recueillons pas sciemment de renseignements personnels auprès de personnes de moins de 16 ans.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>5. COMMENT NOUS STOCKONS ET PROTÉGEONS VOS DONNÉES</h4>
        <p style={{ marginBottom: "16px" }}>Vos renseignements personnels sont stockés à l'aide des services suivants :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li><strong>Stripe</strong> (traitement des paiements) : Stripe gère et stocke toutes les données des cartes de paiement. Nous ne stockons pas vos numéros de carte.</li>
          <li><strong>Firebase</strong> (base de données) : Les numéros de téléphone et les données connexes sont stockés dans Google Firebase.</li>
          <li><strong>Klaviyo</strong> (marketing SMS) : Les numéros de téléphone et les registres de consentement pour les abonnés SMS sont stockés dans Klaviyo.</li>
        </ul>
        <p style={{ marginBottom: "24px" }}>Nous utilisons des mesures de sécurité raisonnables pour protéger vos renseignements personnels contre tout accès non autorisé. Cependant, aucune méthode de stockage électronique n'est sécurisée à 100%.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>6. AVEC QUI NOUS PARTAGEONS VOS DONNÉES</h4>
        <p style={{ marginBottom: "16px" }}>Nous ne vendons, ne louons et n'échangeons vos renseignements personnels à personne. Point final.</p>
        <p style={{ marginBottom: "16px" }}>Nous partageons vos informations uniquement avec les fournisseurs de services tiers suivants :</p>
        
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
              <th style={{ padding: "8px" }}>Service</th>
              <th style={{ padding: "8px" }}>Ce qu'ils reçoivent</th>
              <th style={{ padding: "8px" }}>Pourquoi</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Stripe</td>
              <td style={{ padding: "8px" }}>Nom, courriel, infos de paiement</td>
              <td style={{ padding: "8px" }}>Traitement des paiements</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Firebase (Google)</td>
              <td style={{ padding: "8px" }}>Numéros de téléphone, données de navigation</td>
              <td style={{ padding: "8px" }}>Stockage de données</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Klaviyo</td>
              <td style={{ padding: "8px" }}>Numéros de téléphone, consentements</td>
              <td style={{ padding: "8px" }}>Marketing SMS</td>
            </tr>
          </tbody>
        </table>
        
        <p style={{ marginBottom: "16px" }}>Ces fournisseurs agissent en tant que processeurs en notre nom et sont contractuellement tenus de protéger vos données.</p>
        <p style={{ marginBottom: "24px" }}>Si la loi l'exige, nous pouvons divulguer des renseignements personnels aux autorités policières ou gouvernementales.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>7. COMBIEN DE TEMPS NOUS CONSERVONS VOS DONNÉES</h4>
        <p style={{ marginBottom: "16px" }}>Nous conservons vos renseignements personnels aussi longtemps que nécessaire :</p>
        
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
          <thead>
            <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
              <th style={{ padding: "8px" }}>Type de données</th>
              <th style={{ padding: "8px" }}>Période de conservation</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Registres d'achat de billets</td>
              <td style={{ padding: "8px" }}>6 ans (requis par la loi fiscale du Québec)</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Accords de décharge</td>
              <td style={{ padding: "8px" }}>3 ans après la date de l'événement</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Données des abonnés SMS</td>
              <td style={{ padding: "8px" }}>Jusqu'à votre désabonnement</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Données de navigation Web</td>
              <td style={{ padding: "8px" }}>12 mois</td>
            </tr>
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px" }}>Conversations DM Instagram</td>
              <td style={{ padding: "8px" }}>Non stocké par nous (régi par Meta)</td>
            </tr>
          </tbody>
        </table>
        
        <p style={{ marginBottom: "24px" }}>Après la période de conservation, vos données sont définitivement supprimées.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>8. VOS DROITS EN VERTU DE LA LOI 25 DU QUÉBEC</h4>
        <p style={{ marginBottom: "16px" }}>Vous avez les droits suivants :</p>
        <p style={{ marginBottom: "16px" }}><strong>Droit d'accès.</strong> Vous pouvez demander une copie de tous les renseignements personnels que nous détenons à votre sujet.</p>
        <p style={{ marginBottom: "16px" }}><strong>Droit de rectification.</strong> Vous pouvez nous demander de corriger des informations inexactes.</p>
        <p style={{ marginBottom: "16px" }}><strong>Droit à l'effacement.</strong> Vous pouvez nous demander de supprimer vos renseignements personnels, sous réserve des exigences légales de conservation.</p>
        <p style={{ marginBottom: "16px" }}><strong>Droit de retirer votre consentement.</strong> Vous pouvez retirer votre consentement à tout moment.</p>
        <p style={{ marginBottom: "16px" }}><strong>Droit d'être informé d'une violation.</strong> Si nous subissons une violation de données créant un risque de préjudice sérieux, nous vous en informerons.</p>
        <p style={{ marginBottom: "16px" }}><strong>Droit de déposer une plainte.</strong> Vous pouvez déposer une plainte auprès de la Commission d'accès à l'information du Québec (cai.gouv.qc.ca).</p>
        <p style={{ marginBottom: "24px" }}>Pour exercer l'un de ces droits, contactez Salome Campos à dufleuvecontact@gmail.com. Nous répondrons dans les 30 jours.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>9. MARKETING SMS (CONFORMITÉ À LA LCAP)</h4>
        <p style={{ marginBottom: "16px" }}>Nous n'envoyons des SMS qu'aux personnes qui ont explicitement consenti via Klaviyo.</p>
        <p style={{ marginBottom: "16px" }}>Chaque SMS comprend :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>L'identification de l'expéditeur (@jetaispasinvitelol / Salome Campos)</li>
          <li>Un moyen de se désinscrire (répondre STOP)</li>
          <li>Des coordonnées</li>
        </ul>
        <p style={{ marginBottom: "24px" }}>Nous traitons les demandes de désabonnement instantanément via le système automatisé de Klaviyo.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>10. TÉMOINS (COOKIES) ET SUIVI</h4>
        <p style={{ marginBottom: "16px" }}>Notre site Web peut utiliser des témoins via Firebase pour les fonctionnalités de base. Nous n'utilisons pas de témoins publicitaires.</p>
        <p style={{ marginBottom: "24px" }}>Si notre site Web utilise des témoins non essentiels, nous vous demanderons votre consentement.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>11. MINEURS</h4>
        <p style={{ marginBottom: "16px" }}>Nos événements sont ouverts aux participants de 17 ans et plus. Nous recueillons des renseignements auprès de participants de 17 ans dans le cadre des achats de billets et des accords de décharge.</p>
        <p style={{ marginBottom: "16px" }}>Nous ne recueillons pas sciemment de renseignements personnels auprès de personnes de moins de 16 ans.</p>
        <p style={{ marginBottom: "24px" }}>Pour les participants de 16 et 17 ans, nous recueillons uniquement les informations nécessaires à la vente de billets et à la sécurité.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>12. MODIFICATIONS DE CETTE POLITIQUE</h4>
        <p style={{ marginBottom: "24px" }}>Nous pouvons mettre à jour cette politique de temps à autre. Nous mettrons à jour la date de « Dernière mise à jour » en haut.</p>

        <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>13. CONTACT</h4>
        <p style={{ marginBottom: "16px" }}>Pour toute question ou demande :</p>
        <p style={{ marginBottom: "16px", fontWeight: "bold" }}>
          Salome Campos<br />
          Courriel : dufleuvecontact@gmail.com<br />
          Québec, Québec, Canada
        </p>
        <p style={{ marginBottom: "16px" }}>Pour les plaintes :</p>
        <p style={{ marginBottom: "24px", fontWeight: "bold" }}>
          Commission d'accès à l'information du Québec (CAI)<br />
          Site Web : cai.gouv.qc.ca<br />
          Téléphone : 1-888-528-7741
        </p>
      </div>
    );
  }

  return (
    <div className="terms-content" style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1A1A", lineHeight: "1.6", textAlign: "left" }}>
      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>PRIVACY POLICY</h3>
      <p style={{ fontWeight: "bold", marginBottom: "24px" }}>Last updated: June 4, 2026</p>
      
      <p style={{ marginBottom: "16px" }}>@jetaispasinvitelol is operated by Salome Campos, sole proprietor, based in Quebec City, Quebec, Canada.</p>
      <p style={{ marginBottom: "24px" }}>This policy explains what personal information we collect, why we collect it, how we use it, and what your rights are. We take your privacy seriously and comply with Quebec's Act respecting the protection of personal information in the private sector (Law 25) and Canada's Anti-Spam Legislation (CASL).</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>1. PERSON RESPONSIBLE FOR PRIVACY PROTECTION</h4>
      <p style={{ marginBottom: "16px" }}>Under Quebec Law 25, the person responsible for the protection of personal information held by this organization is:</p>
      <p style={{ marginBottom: "16px", fontWeight: "bold" }}>
        Salome Campos<br />
        Email: dufleuvecontact@gmail.com<br />
        Quebec City, Quebec, Canada
      </p>
      <p style={{ marginBottom: "24px" }}>All privacy-related questions, access requests, and complaints should be directed to the email above.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>2. WHAT WE COLLECT</h4>
      <p style={{ marginBottom: "16px" }}>We collect the following personal information depending on how you interact with us:</p>
      
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>When you purchase a ticket (via Stripe):</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Full name</li>
        <li>Email address</li>
        <li>Payment card information (processed and stored by Stripe, not by us)</li>
        <li>Transaction amount and date</li>
        <li>IP address</li>
        <li>Timestamp of terms acceptance</li>
      </ul>

      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>When you agree to the event waiver:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Date of birth</li>
        <li>Digital signature</li>
        <li>Timestamp of agreement</li>
      </ul>

      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>When you sign up for SMS updates (via Klaviyo):</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Phone number</li>
        <li>Consent timestamp</li>
        <li>Consent method (how you signed up)</li>
      </ul>

      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>When you visit our website:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Phone number (stored in Firebase)</li>
        <li>Basic device and browser information</li>
        <li>Pages visited and time spent</li>
      </ul>

      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>When you contact us via Instagram DMs:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
        <li>Your Instagram username</li>
        <li>The content of your messages</li>
      </ul>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>3. WHY WE COLLECT IT</h4>
      <p style={{ marginBottom: "16px" }}>We collect personal information for the following purposes only:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li><strong>Ticket sales and payment processing.</strong> To process your purchase, send you a confirmation, and maintain transaction records as required by law.</li>
        <li><strong>Event safety and compliance.</strong> To verify your age, enforce event terms, maintain an attendance record, and contact you in case of an emergency or event change.</li>
        <li><strong>Waiver documentation.</strong> To maintain a record that you agreed to our event terms and conditions as legal protection for both you and the organizer.</li>
        <li><strong>SMS marketing.</strong> To send you announcements about upcoming events. Only if you explicitly opted in. You can unsubscribe at any time.</li>
        <li><strong>Customer support.</strong> To respond to your questions or concerns sent through Instagram or email.</li>
        <li><strong>Legal obligations.</strong> To comply with tax, accounting, and other legal requirements under Quebec and Canadian law.</li>
      </ul>
      <p style={{ marginBottom: "24px" }}>We do not collect personal information for any purpose beyond what is listed above.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>4. CONSENT</h4>
      <p style={{ marginBottom: "16px" }}>We collect your personal information only with your consent.</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li><strong>Ticket purchases:</strong> By completing a purchase through Stripe, you consent to the collection of your payment and contact information for the purpose of processing your transaction.</li>
        <li><strong>Waiver agreement:</strong> By checking the waiver checkbox and providing your information, you consent to the collection and storage of your waiver data.</li>
        <li><strong>SMS signup:</strong> By entering your phone number and opting in through our Klaviyo signup form, you give express consent to receive commercial electronic messages (event announcements) via SMS. The signup form clearly states what you're signing up for. The opt-in checkbox is unchecked by default.</li>
        <li><strong>Website browsing:</strong> By using our website, you consent to the collection of basic browsing data stored through Firebase.</li>
      </ul>
      <p style={{ marginBottom: "16px" }}>You can withdraw your consent at any time by contacting us at dufleuvecontact@gmail.com. Withdrawing consent may affect our ability to provide you with event-related services (for example, we cannot process a ticket purchase without your payment information).</p>
      <p style={{ marginBottom: "24px" }}><strong>For attendees under 18:</strong> If you are under 18 years of age, by providing your personal information you represent that your parent or legal guardian is aware that you are sharing this information with us and does not object. We do not knowingly collect personal information from anyone under the age of 16.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>5. HOW WE STORE AND PROTECT YOUR DATA</h4>
      <p style={{ marginBottom: "16px" }}>Your personal information is stored using the following services:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li><strong>Stripe</strong> (payment processing): Stripe handles and stores all payment card data. We do not store your credit or debit card numbers. Stripe is PCI DSS compliant. Their privacy policy is available at stripe.com/privacy.</li>
        <li><strong>Firebase</strong> (database): Phone numbers and related data are stored in Google Firebase. Firebase is hosted on Google Cloud infrastructure with encryption at rest and in transit. Google's privacy policy is available at policies.google.com/privacy.</li>
        <li><strong>Klaviyo</strong> (SMS marketing): Phone numbers and consent records for SMS subscribers are stored in Klaviyo. Their privacy policy is available at klaviyo.com/privacy.</li>
      </ul>
      <p style={{ marginBottom: "24px" }}>We use reasonable security measures to protect your personal information from unauthorized access, loss, or disclosure. However, no method of electronic storage is 100% secure. We cannot guarantee absolute security.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>6. WHO WE SHARE YOUR DATA WITH</h4>
      <p style={{ marginBottom: "16px" }}>We do not sell, rent, or trade your personal information to anyone. Period.</p>
      <p style={{ marginBottom: "16px" }}>We share your information only with the following third-party service providers, strictly for the purposes described in this policy:</p>
      
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
            <th style={{ padding: "8px" }}>Service</th>
            <th style={{ padding: "8px" }}>What They Receive</th>
            <th style={{ padding: "8px" }}>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Stripe</td>
            <td style={{ padding: "8px" }}>Name, email, payment info</td>
            <td style={{ padding: "8px" }}>Payment processing</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Firebase (Google)</td>
            <td style={{ padding: "8px" }}>Phone numbers, browsing data</td>
            <td style={{ padding: "8px" }}>Data storage</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Klaviyo</td>
            <td style={{ padding: "8px" }}>Phone numbers, consent records</td>
            <td style={{ padding: "8px" }}>SMS marketing</td>
          </tr>
        </tbody>
      </table>
      
      <p style={{ marginBottom: "16px" }}>These providers act as processors on our behalf and are contractually bound to protect your data. We do not share your information with advertisers, data brokers, or any other third parties.</p>
      <p style={{ marginBottom: "24px" }}>If required by law (court order, subpoena, or legal investigation), we may disclose personal information to law enforcement or government authorities. We will notify you if this happens unless legally prohibited from doing so.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>7. HOW LONG WE KEEP YOUR DATA</h4>
      <p style={{ marginBottom: "16px" }}>We keep your personal information only as long as necessary for the purposes it was collected:</p>
      
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ddd", textAlign: "left" }}>
            <th style={{ padding: "8px" }}>Data Type</th>
            <th style={{ padding: "8px" }}>Retention Period</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Ticket purchase records</td>
            <td style={{ padding: "8px" }}>6 years (required by Quebec tax law)</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Waiver agreements</td>
            <td style={{ padding: "8px" }}>3 years after the event date</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>SMS subscriber data</td>
            <td style={{ padding: "8px" }}>Until you unsubscribe</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Website browsing data</td>
            <td style={{ padding: "8px" }}>12 months</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "8px" }}>Instagram DM conversations</td>
            <td style={{ padding: "8px" }}>Not stored by us (governed by Meta's policies)</td>
          </tr>
        </tbody>
      </table>
      
      <p style={{ marginBottom: "24px" }}>After the retention period, your data is permanently deleted from our systems and from the third-party services we control.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>8. YOUR RIGHTS UNDER QUEBEC LAW 25</h4>
      <p style={{ marginBottom: "16px" }}>You have the following rights regarding your personal information:</p>
      <p style={{ marginBottom: "16px" }}><strong>Right of access.</strong> You can request a copy of all personal information we hold about you. We will respond within 30 days.</p>
      <p style={{ marginBottom: "16px" }}><strong>Right of rectification.</strong> If any of your personal information is inaccurate or incomplete, you can ask us to correct it.</p>
      <p style={{ marginBottom: "16px" }}><strong>Right of deletion.</strong> You can ask us to delete your personal information, subject to legal retention requirements (for example, we cannot delete tax-related transaction records before the legally required retention period).</p>
      <p style={{ marginBottom: "16px" }}><strong>Right to withdraw consent.</strong> You can withdraw your consent to the collection or use of your personal information at any time. For SMS marketing, you can unsubscribe by replying STOP to any message or contacting us directly.</p>
      <p style={{ marginBottom: "16px" }}><strong>Right to be informed of a data breach.</strong> If we experience a data breach that creates a risk of serious harm to you, we will notify you and the Commission d'accès à l'information du Québec (CAI) as required by law.</p>
      <p style={{ marginBottom: "16px" }}><strong>Right to lodge a complaint.</strong> If you believe we have mishandled your personal information, you can file a complaint with the Commission d'accès à l'information du Québec at cai.gouv.qc.ca.</p>
      <p style={{ marginBottom: "24px" }}>To exercise any of these rights, contact Salome Campos at dufleuvecontact@gmail.com. Include your full name and enough detail for us to identify your records. We will respond within 30 days.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>9. SMS MARKETING (CASL COMPLIANCE)</h4>
      <p style={{ marginBottom: "16px" }}>We send SMS messages about upcoming events only to people who have explicitly opted in through our Klaviyo signup form.</p>
      <p style={{ marginBottom: "16px" }}>Every SMS message we send includes:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Identification of the sender (@jetaispasinvitelol / Salome Campos)</li>
        <li>A way to unsubscribe (reply STOP)</li>
        <li>Contact information</li>
      </ul>
      <p style={{ marginBottom: "16px" }}>We process unsubscribe requests within 10 business days as required by CASL. In practice we process them instantly through Klaviyo's automated system.</p>
      <p style={{ marginBottom: "24px" }}>We never send SMS messages to anyone who hasn't opted in. We never purchase phone number lists. We never add people to our SMS list without their explicit consent.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>10. COOKIES AND TRACKING</h4>
      <p style={{ marginBottom: "16px" }}>Our website may use cookies or similar technologies through Firebase for basic functionality and analytics. We do not use advertising cookies or tracking pixels from third-party advertisers.</p>
      <p style={{ marginBottom: "24px" }}>If our website uses cookies that are not strictly necessary for functionality, we will ask for your consent before placing them, as required by Quebec Law 25.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>11. MINORS</h4>
      <p style={{ marginBottom: "16px" }}>Our events are open to attendees aged 17 and older. We collect personal information from attendees aged 17 as part of ticket purchases and waiver agreements.</p>
      <p style={{ marginBottom: "16px" }}>We do not knowingly collect personal information from anyone under the age of 16. If we discover that we have collected information from someone under 16, we will delete it immediately.</p>
      <p style={{ marginBottom: "24px" }}>For attendees aged 16 and 17, we collect only the information necessary for ticket sales, event safety, and legal compliance. We do not use their information for marketing purposes unless they have separately and explicitly opted into our SMS list.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>12. CHANGES TO THIS POLICY</h4>
      <p style={{ marginBottom: "24px" }}>We may update this privacy policy from time to time. When we do, we will update the "Last updated" date at the top. If we make significant changes to how we handle your personal information, we will notify you via SMS (if you're a subscriber) or by posting a notice on our website.</p>

      <hr style={{ border: "0", borderTop: "1px solid #ddd", margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>13. CONTACT</h4>
      <p style={{ marginBottom: "16px" }}>For any privacy-related questions or requests:</p>
      <p style={{ marginBottom: "16px", fontWeight: "bold" }}>
        Salome Campos<br />
        Email: dufleuvecontact@gmail.com<br />
        Quebec City, Quebec, Canada
      </p>
      <p style={{ marginBottom: "16px" }}>For complaints about how your personal information is handled, you may also contact:</p>
      <p style={{ marginBottom: "24px", fontWeight: "bold" }}>
        Commission d'accès à l'information du Québec (CAI)<br />
        Website: cai.gouv.qc.ca<br />
        Phone: 1-888-528-7741
      </p>
    </div>
  );
}
