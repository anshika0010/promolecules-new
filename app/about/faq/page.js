import { getSEOMetadata, getJSONLD } from "@/lib/seo";
import FAQClient from "./FAQClient";

export const metadata = getSEOMetadata("faq");

export default function Page() {
  const jsonld = getJSONLD("faq");

  return (
    <>
      {Array.isArray(jsonld)
        ? jsonld.map((schema, index) => (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
              }}
            />
          ))
        : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonld),
            }}
          />
        )}

      <FAQClient jsonld={jsonld} />
    </>
  );
}