
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ChatbotIssueRequest {
  userMessage: string;
  timestamp: string;
  userAgent?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userMessage, timestamp, userAgent }: ChatbotIssueRequest = await req.json();

    console.log("Sending chatbot issue notification:", { userMessage, timestamp });

    // Send issue notification email
    const emailResponse = await resend.emails.send({
      from: "Gensys Chatbot <onboarding@resend.dev>",
      to: ["gensysworkspace@gmail.com"],
      subject: `Chatbot Issue Report - ${new Date(timestamp).toLocaleDateString()}`,
      html: `
        <h2>Chatbot Issue Report</h2>
        <div style="border-left: 4px solid #f59e0b; padding-left: 16px; margin: 20px 0;">
          <p><strong>Issue Type:</strong> User reported problem via chatbot</p>
          <p><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
          <p><strong>User Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; margin: 8px 0;">
            ${userMessage}
          </div>
          ${userAgent ? `<p><strong>User Agent:</strong> ${userAgent}</p>` : ''}
        </div>
        <hr style="margin: 20px 0;">
        <p><strong>Recommended Actions:</strong></p>
        <ul>
          <li>Review the user's issue and context</li>
          <li>Respond via email or phone if contact information is available</li>
          <li>Update chatbot responses if this is a common query</li>
          <li>Document the issue for future reference</li>
        </ul>
        <hr style="margin: 20px 0;">
        <p><small>This email was automatically sent from the Gensys chatbot system.</small></p>
      `,
    });

    console.log("Issue notification sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-chatbot-issue function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
