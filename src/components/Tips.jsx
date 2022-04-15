import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const Tips = () => {
  return (
    <Container>
    <h3 className="misTitulos tituloTips">- Tips para el cuidado de la piel -</h3>
      <Accordion className="myCard">
        <Accordion.Item eventKey="0">
          <Accordion.Header><span className="material-icons iconosTips">beach_access </span>PROTEGETE DEL SOL</Accordion.Header>
          <Accordion.Body className="bodyTips">
            Una de las formas más importantes para cuidar la piel es protegerla del sol. Una vida de exposición al sol puede provocar arrugas, manchas de la edad y otros problemas de la piel, así como un aumento del riesgo de cáncer de piel.
            Para obtener la protección solar más completa:
            <ul>
              <li><span className="material-icons iconosListaTips">beach_access </span> Usa protector solar. Utiliza un protector solar de amplio espectro que tenga un factor de protección solar de, al menos, 15. Colócate abundante cantidad de protector solar, y vuelve a aplicarlo cada dos horas —o con más frecuencia si estás nadando o transpirando—.
              </li>
              <li><span className="material-icons iconosListaTips">beach_access </span> Busca lugares con sombra. Evita el sol entre las 10 de la mañana y las 4 de la tarde, cuando los rayos solares son más intensos.
              </li>
              <li><span className="material-icons iconosListaTips">beach_access </span> Usa ropa de protección. Protégete la piel con prendas de tejidos ajustados y mangas largas, pantalones largos y sombreros de ala ancha. También ten en cuenta los productos para lavandería que pueden proporcionarle a la ropa una capa adicional de protección ultravioleta durante una cantidad determinada de lavados, o prendas especiales para protegerte del sol, que están especialmente diseñadas para bloquear los rayos ultravioletas.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><span className="material-icons iconosTips">smoke_free </span>DEJA DE LADO EL CIGARRILLO</Accordion.Header>
          <Accordion.Body className="bodyTips">
            Fumar le da a tu piel un aspecto avejentado y contribuye a la formación de arrugas. Fumar estrecha los pequeños vasos sanguíneos que se encuentran en las capas más superficiales de la piel, lo que disminuye el flujo sanguíneo y da un aspecto más pálido a la piel. Esto también elimina el oxígeno y los nutrientes que son importantes para la buena salud de la piel.
            Fumar también daña el colágeno y la elastina, las fibras que le aportan fortaleza y elasticidad a la piel. Además, las expresiones faciales reiteradas que haces cuando fumas, por ejemplo, fruncir los labios al inhalar y entrecerrar los ojos para exhalar el humo, pueden contribuir a la formación de arrugas.
            Además, fumar aumenta el riesgo de carcinoma espinocelular. Si fumas, dejar de hacerlo es la mejor manera de protegerte la piel. Pídele a tu médico consejos o tratamientos que te ayuden a dejar de fumar.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><span className="material-icons iconosTips">favorite_border </span>TRATA TU PIEL CON SUAVIDAD</Accordion.Header>
          <Accordion.Body className="bodyTips">
            La limpieza y el afeitado diarios pueden perjudicar tu piel. Para tratarla con suavidad:
            <ul>
                <li><span className="material-icons iconosListaTips">favorite_border </span> Limita la duración del baño. El agua caliente y las duchas o baños prolongados eliminan los aceites naturales de la piel.
                </li>
                <li><span className="material-icons iconosListaTips">favorite_border </span> Limita la duración del baño o de la ducha y usa agua tibia en lugar de agua caliente.
                </li>
                <li><span className="material-icons iconosListaTips">favorite_border </span> Evita los jabones fuertes. Los jabones y detergentes fuertes pueden eliminar los aceites naturales de la piel. En su lugar, usa limpiadores suaves.
                </li>
                <li><span className="material-icons iconosListaTips">favorite_border </span>Aféitate con cuidado. Para proteger y lubricar la piel, aplica crema, loción o gel de afeitar antes de afeitarte. Para una afeitada más al ras, usa una afeitadora limpia y afilada. Aféitate en la dirección en que crece el pelo, no a contrapelo.
                </li>
                <li><span className="material-icons iconosListaTips">favorite_border </span>Sécate con golpecitos. Después de lavarte o bañarte, sécate la piel suavemente con una toalla dando pequeños toques para que quede algo de humedad en la piel.
                Humecta la piel seca. Si tienes piel seca, usa un humectante que se adapte a tu tipo de piel. Para el uso diario, considera un humectante que contenga factor de protección solar.
                </li>
            </ul>                
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><span className="material-icons iconosTips">restaurant </span>LLEVA UNA DIETA SALUDABLE</Accordion.Header>
          <Accordion.Body className="bodyTips">
            Una dieta saludable puede ayudarte a verte y sentirte mejor. Come muchas frutas, verduras, granos integrales y proteínas magras. La asociación entre la dieta y el acné no está clara, pero algunas investigaciones sugieren que una dieta con alto contenido de aceite de pescado o suplementos de aceite de pescado y baja en grasas no saludables y carbohidratos procesados o refinados podría promover una piel más joven. Beber mucha agua ayuda a mantener la piel hidratada.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><span className="material-icons iconosTips">spa </span>CONTROLA EL ESTRES</Accordion.Header>
          <Accordion.Body className="bodyTips">
            Cuando el estrés está fuera de control, la piel puede volverse más sensible y se pueden desencadenar brotes de acné y otros problemas cutáneos. Para fomentar una piel sana, y un estado de ánimo sano, toma medidas para controlar el estrés. Duerme lo suficiente, fija límites razonables, recorta tu lista de tareas pendientes y encuentra tiempo para hacer las cosas que disfrutas. Los resultados podrían ser más significativos de lo que esperas.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  )
}

export default Tips