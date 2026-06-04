import React from 'react';
import { useLanguage } from './LanguageContext';

export default function TermsText({ darkMode = false }: { darkMode?: boolean }) {
  const { lang } = useLanguage();
  const textColor = darkMode ? '#a8b6c5' : '#1A1A1A';
  const borderColor = darkMode ? '#3f4757' : '#ddd';

  if (lang === 'fr') {
    return (
      <div className="terms-content" style={{ fontFamily: "'DM Sans', sans-serif", color: textColor, lineHeight: "1.6", textAlign: "left" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>CONDITIONS GÉNÉRALES DE L'ÉVÉNEMENT</h3>
        <p style={{ fontWeight: "bold", marginBottom: "16px" }}>Dernière mise à jour : 4 juin 2026</p>
        <p style={{ fontStyle: "italic", marginBottom: "24px", color: "#ff6b9d" }}>Remarque : Ces conditions sont sujettes à changement selon l'évolution de la planification de l'événement.</p>
        
        <p style={{ marginBottom: "24px" }}>En achetant un billet pour tout événement organisé par @jetaispasinvitelol, vous acceptez les conditions suivantes. Lisez-les. Elles sont importantes.</p>
        
        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>1. ÂGE REQUIS</h4>
        <p style={{ marginBottom: "24px" }}>Cet événement est ouvert aux participants âgés de 17 à 20 ans. Il peut vous être demandé de présenter une pièce d'identité valide avec photo émise par le gouvernement à la porte. Fausser votre âge annule ces conditions et vous serez expulsé sans remboursement.</p>
        
        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>2. POLITIQUE ZÉRO ALCOOL</h4>
        <p style={{ marginBottom: "16px" }}>Aucun alcool n'est autorisé à l'intérieur de la salle. Cela signifie :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Vous ne pouvez pas apporter d'alcool dans la salle</li>
          <li>Vous ne pouvez pas consommer d'alcool à l'intérieur de la salle</li>
          <li>Vous ne pouvez pas stocker d'alcool</li>
        </ul>
        <p style={{ marginBottom: "16px" }}>La sécurité effectuera des fouilles de sacs à l'entrée. Tout alcool trouvé sera confisqué et l'entrée sera refusée au détenteur ou il sera expulsé sans remboursement.</p>
        <p style={{ marginBottom: "24px", fontWeight: "bold" }}>Cette politique est strictement appliquée. Aucune exception.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>3. POLITIQUE D'INTOXICATION</h4>
        <p style={{ marginBottom: "16px" }}>L'organisateur se réserve le droit de refuser l'entrée à toute personne visiblement intoxiquée à son arrivée. Si l'entrée vous est refusée en raison d'une intoxication visible, aucun remboursement ne sera émis.</p>
        <p style={{ marginBottom: "24px" }}>Si un participant est trouvé visiblement intoxiqué à l'intérieur de la salle, il sera expulsé immédiatement sans remboursement.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>4. SÉCURITÉ ET FOUILLES</h4>
        <p style={{ marginBottom: "16px" }}>Du personnel de sécurité licencié est présent à tous les événements. En entrant dans la salle, vous consentez à :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Des fouilles de sacs à l'entrée</li>
          <li>Des palpations si jugé nécessaire par la sécurité</li>
          <li>Une vérification d'identité</li>
        </ul>
        <p style={{ marginBottom: "24px" }}>Le refus de se conformer aux procédures de sécurité entraînera un refus d'entrée sans remboursement.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>5. CODE DE CONDUITE</h4>
        <p style={{ marginBottom: "16px" }}>En participant, vous acceptez de :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Traiter tous les participants, le personnel et la sécurité avec respect</li>
          <li>Suivre toutes les instructions du personnel et de la sécurité</li>
          <li>Ne pas vous engager dans des bagarres, du harcèlement, de l'intimidation ou toute forme de violence</li>
          <li>Ne vous engager dans aucune activité illégale sur les lieux</li>
          <li>Ne pas endommager la salle, l'équipement ou la propriété de quelque manière que ce soit</li>
          <li>Ne pas apporter d'armes, de substances illégales ou d'articles interdits dans la salle</li>
        </ul>
        <p style={{ marginBottom: "24px" }}>Toute violation de ce qui précède entraînera une expulsion immédiate sans remboursement. L'organisateur se réserve le droit de bannir les contrevenants de tous les événements futurs.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>6. RESPONSABILITÉ DES DOMMAGES MATÉRIELS</h4>
        <p style={{ marginBottom: "24px" }}>Vous êtes personnellement responsable de tout dommage que vous causez à la salle, à son équipement, à son mobilier ou à sa propriété pendant l'événement. En achetant un billet, vous acceptez de rembourser l'organisateur du coût total de réparation ou de remplacement de tout bien que vous endommagez.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>7. ASSOMPTION DES RISQUES</h4>
        <p style={{ marginBottom: "16px" }}>Vous reconnaissez que cet événement implique de la musique forte, des foules, un faible éclairage, de la danse et une activité physique dans un espace clos. Vous assumez volontairement tous les risques associés à votre présence, y compris, mais sans s'y limiter :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
          <li>Exposition auditive due à la musique amplifiée</li>
          <li>Contact physique dans un environnement très fréquenté</li>
          <li>Glissades, trébuchements et chutes</li>
          <li>Exposition aux machines à brouillard, éclairage stroboscopique ou effets similaires</li>
        </ul>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>8. EFFETS PERSONNELS</h4>
        <p style={{ marginBottom: "24px" }}>L'organisateur n'est pas responsable des effets personnels perdus, volés ou endommagés pendant l'événement. Gardez vos objets de valeur sur vous en tout temps.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>9. CONSENTEMENT À LA PHOTOGRAPHIE ET À LA VIDÉO</h4>
        <p style={{ marginBottom: "16px" }}>Des photographies et des enregistrements vidéo auront lieu pendant l'événement. En entrant dans la salle, vous consentez à être photographié et filmé. Ce contenu peut être utilisé sur les réseaux sociaux, le site Web de @jetaispasinvitelol et d'autres matériels promotionnels.</p>
        <p style={{ marginBottom: "16px" }}>Si vous souhaitez que votre image soit retirée de tout contenu publié, contactez-nous à dufleuvecontact@gmail.com. Les demandes de retrait seront honorées dans les 7 jours.</p>
        <p style={{ marginBottom: "24px" }}>Pour les participants de moins de 18 ans : en achetant un billet et en participant à l'événement, vous déclarez avoir informé votre parent ou tuteur légal de cette politique et qu'il ne s'y oppose pas.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>10. POLITIQUE DE REMBOURSEMENT</h4>
        <p style={{ marginBottom: "16px" }}>Toutes les ventes de billets sont finales. Aucun remboursement ne sera émis pour quelque raison que ce soit, y compris, mais sans s'y limiter :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
          <li>Départ volontaire</li>
          <li>Expulsion pour violation de ces conditions</li>
          <li>Refus d'entrée pour intoxication ou non-conformité à la sécurité</li>
          <li>Annulation de l'événement due à des circonstances hors du contrôle de l'organisateur</li>
        </ul>
        <p style={{ marginBottom: "24px" }}>Si l'organisateur annule un événement, les détenteurs de billets se verront offrir un remboursement ou un transfert selon la discrétion de l'organisateur.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>11. LIMITATION DE RESPONSABILITÉ</h4>
        <p style={{ marginBottom: "16px" }}>Dans toute la mesure permise par la loi du Québec, la responsabilité totale de l'organisateur est limitée au prix que vous avez payé pour votre billet.</p>
        <p style={{ marginBottom: "16px" }}>L'organisateur n'est pas responsable de :</p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
          <li>Les actions des autres participants</li>
          <li>Les conditions à l'extérieur des lieux</li>
          <li>Votre décision de consommer de l'alcool en dehors des lieux</li>
        </ul>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>12. EXPULSION ET BANNISSEMENT</h4>
        <p style={{ marginBottom: "16px" }}>L'organisateur et la sécurité ont le droit absolu d'expulser tout participant à tout moment. Les personnes expulsées doivent quitter les lieux immédiatement.</p>
        <p style={{ marginBottom: "24px" }}>Les participants expulsés peuvent être bannis de tous les événements futurs sans remboursement.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>13. LOI APPLICABLE</h4>
        <p style={{ marginBottom: "24px" }}>Ces conditions sont régies par les lois du Québec, Canada.</p>

        <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

        <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>14. CONTACT</h4>
        <p style={{ marginBottom: "24px" }}>Des questions ? Contactez-nous à dufleuvecontact@gmail.com.</p>
      </div>
    );
  }

  return (
    <div className="terms-content" style={{ fontFamily: "'DM Sans', sans-serif", color: textColor, lineHeight: "1.6", textAlign: "left" }}>
      <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>EVENT TERMS AND CONDITIONS</h3>
      <p style={{ fontWeight: "bold", marginBottom: "16px" }}>Last updated: June 4, 2026</p>
      <p style={{ fontStyle: "italic", marginBottom: "24px", color: "#ff6b9d" }}>Note: These terms are subject to change with how event planning goes.</p>
      
      <p style={{ marginBottom: "24px" }}>By purchasing a ticket to any event hosted by @jetaispasinvitelol, you agree to the following terms. Read them. They matter.</p>
      
      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>1. AGE REQUIREMENT</h4>
      <p style={{ marginBottom: "24px" }}>This event is open to attendees aged 17 to 20. You may be asked to present valid government-issued photo ID at the door. Misrepresenting your age voids these terms and you will be removed without refund.</p>
      
      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>2. ZERO ALCOHOL POLICY</h4>
      <p style={{ marginBottom: "16px" }}>No alcohol is permitted inside the venue. This means:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>You cannot bring alcohol into the venue</li>
        <li>You cannot consume alcohol inside the venue</li>
        <li>You cannot store alcohol</li>
      </ul>
      <p style={{ marginBottom: "16px" }}>Security will conduct bag checks at the entrance. Any alcohol found will be confiscated and the holder will be refused entry or removed without refund.</p>
      <p style={{ marginBottom: "24px", fontWeight: "bold" }}>This policy is strictly enforced. No exceptions.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>3. INTOXICATION POLICY</h4>
      <p style={{ marginBottom: "16px" }}>The organizer reserves the right to refuse entry to anyone who appears visibly intoxicated at the time of arrival. If you are refused entry due to visible intoxication, no refund will be issued.</p>
      <p style={{ marginBottom: "24px" }}>If an attendee is found to be visibly intoxicated inside the venue, they will be removed immediately without refund.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>4. SECURITY AND SEARCHES</h4>
      <p style={{ marginBottom: "16px" }}>Licensed security personnel are present at all events. By entering the venue you consent to:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Bag checks at the entrance</li>
        <li>Pat-down searches if deemed necessary by security</li>
        <li>ID verification</li>
      </ul>
      <p style={{ marginBottom: "24px" }}>Refusal to comply with security procedures will result in denied entry without refund.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>5. CODE OF CONDUCT</h4>
      <p style={{ marginBottom: "16px" }}>By attending, you agree to:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Treat all attendees, staff, and security with respect</li>
        <li>Follow all instructions from event staff and security</li>
        <li>Not engage in fighting, harassment, intimidation, or any form of violence</li>
        <li>Not engage in any illegal activity on the premises</li>
        <li>Not damage the venue, equipment, or property in any way</li>
        <li>Not bring weapons, illegal substances, or prohibited items into the venue</li>
      </ul>
      <p style={{ marginBottom: "24px" }}>Violation of any of the above will result in immediate removal without refund. The organizer reserves the right to ban violators from all future events.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>6. PROPERTY DAMAGE LIABILITY</h4>
      <p style={{ marginBottom: "24px" }}>You are personally responsible for any damage you cause to the venue, its equipment, furnishings, or property during the event. By purchasing a ticket, you agree to reimburse the organizer for the full cost of repairing or replacing any property you damage. This obligation survives your removal from the event and the conclusion of the event.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>7. ASSUMPTION OF RISK</h4>
      <p style={{ marginBottom: "16px" }}>You acknowledge that this event involves loud music, crowds, low lighting, dancing, and physical activity in an enclosed space. You voluntarily assume all risks associated with attending, including but not limited to:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
        <li>Hearing exposure from amplified music</li>
        <li>Physical contact in a crowded environment</li>
        <li>Slips, trips, and falls</li>
        <li>Exposure to fog machines, strobe lighting, or similar effects</li>
      </ul>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>8. PERSONAL BELONGINGS</h4>
      <p style={{ marginBottom: "24px" }}>The organizer is not responsible for any personal belongings that are lost, stolen, or damaged during the event. Keep your valuables on your person at all times.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>9. PHOTOGRAPHY AND VIDEO CONSENT</h4>
      <p style={{ marginBottom: "16px" }}>Photography and video recording will take place during the event. By entering the venue, you consent to being photographed and filmed. This content may be used on social media, the @jetaispasinvitelol website, and other promotional materials.</p>
      <p style={{ marginBottom: "16px" }}>If you wish to have your image removed from any published content, contact us at contact@jetaispasinvitelol.com. Removal requests will be honored within 7 days.</p>
      <p style={{ marginBottom: "24px" }}>For attendees under 18: by purchasing a ticket and attending the event, you represent that you have informed your parent or legal guardian of this photography and video policy and that they do not object.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>10. REFUND POLICY</h4>
      <p style={{ marginBottom: "16px" }}>All ticket sales are final. No refunds will be issued for any reason, including but not limited to:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "16px" }}>
        <li>Voluntary departure</li>
        <li>Removal for violating these terms</li>
        <li>Refusal of entry due to intoxication, failure to comply with security, or failure to present valid ID</li>
        <li>Event cancellation due to circumstances beyond the organizer's control</li>
      </ul>
      <p style={{ marginBottom: "24px" }}>In the event that the organizer cancels an event before it takes place, ticket holders will be offered either a refund or transfer to a future event at the organizer's discretion.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>11. LIMITATION OF LIABILITY</h4>
      <p style={{ marginBottom: "16px" }}>To the fullest extent permitted by Quebec law, the organizer's total liability for any claim arising from your attendance is limited to the price you paid for your ticket.</p>
      <p style={{ marginBottom: "16px" }}>The organizer is not responsible for:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "24px" }}>
        <li>Actions of other attendees</li>
        <li>Conditions outside the venue premises</li>
        <li>Events occurring before your arrival or after your departure</li>
        <li>Your decision to consume alcohol before, during, or after the event outside of the venue premises</li>
        <li>Any injury resulting from your own voluntary actions, including dancing, running, or physical contact with others</li>
      </ul>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>12. REMOVAL AND BANNING</h4>
      <p style={{ marginBottom: "16px" }}>The organizer and security personnel have the sole and absolute right to remove any attendee from the event at any time for any reason. Removed attendees must leave the premises immediately. Refusal to leave after being asked constitutes trespassing.</p>
      <p style={{ marginBottom: "24px" }}>Attendees who are removed for violating these terms may be banned from all future events. Banned individuals who attempt to purchase tickets or attend future events will be refused entry without refund.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>13. GOVERNING LAW</h4>
      <p style={{ marginBottom: "24px" }}>These terms are governed by the laws of the Province of Quebec, Canada. Any disputes arising from these terms or your attendance at an event will be subject to the exclusive jurisdiction of the courts of Quebec City, Quebec.</p>

      <hr style={{ border: "0", borderTop: `1px solid ${borderColor}`, margin: "24px 0" }} />

      <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>14. CONTACT</h4>
      <p style={{ marginBottom: "24px" }}>Questions about these terms? Reach us at dufleuvecontact@gmail.com.</p>

    </div>
  );
}
