"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

import { CERTIFICATIONS } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CertificationsSection() {
  const certifications = React.useMemo(() => {
    const unique = new Map<string, (typeof CERTIFICATIONS)[number]>();
    for (const cert of CERTIFICATIONS) {
      if (!unique.has(cert.id)) unique.set(cert.id, cert);
    }
    return Array.from(unique.values()).slice(0, 4);
  }, []);

  return (
    <div
      id="certifications"
      className="max-w-screen-lg mx-4 lg:mx-auto mt-8 md:mt-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-foreground">
          Certifications
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Verified credentials and learning milestones.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div
            className="absolute top-8 left-8 w-3 h-3 bg-primary/20 rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-16 right-12 w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-8 right-8 w-2.5 h-2.5 bg-primary/15 rounded-full animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 opacity-0 hover:opacity-100 transition-all duration-700 blur-md sm:blur-lg md:blur-xl pointer-events-none" />

        <div className="relative bg-card border border-border rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-all duration-700 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

          <div className="relative p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Certificate Details
              </h2>
            </motion.div>

            {certifications.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No certifications added yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <Card
                    key={cert.id}
                    className="border-border/60"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                      <CardDescription>
                        {cert.issuer}
                        {cert.date ? ` • ${cert.date}` : ""}
                      </CardDescription>
                    </CardHeader>

                    {(cert.description || cert.credentialId) && (
                      <CardContent className="space-y-2">
                        {cert.description ? (
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {cert.description}
                          </p>
                        ) : null}

                        {cert.credentialId ? (
                          <p className="text-xs text-muted-foreground">
                            Credential ID: {cert.credentialId}
                          </p>
                        ) : null}
                      </CardContent>
                    )}

                    <CardFooter className="pt-0">
                      <Button asChild size="sm" variant="secondary">
                        <a
                          href={cert.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open certificate for ${cert.title}`}
                        >
                          <span>Open</span>
                          <ArrowUpRight />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
