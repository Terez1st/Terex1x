"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { FaBitcoin, FaChartLine, FaCircle } from "react-icons/fa"
import {  } from "react-icons/ri"
import { Pm, Zaad, Evc, Xbet } from '@/components/icons'
import MarketMode from "./MarketMode"
import { useContext, useEffect, useState } from "react"
import { ActiveTabContext } from "@/components/BodyWrapper"




const FormSchema = z.object({
  money: z.enum(["Bitcoin", "1xbet", "Perfect money"], {
    required_error: "Please choose the correct payment option"
  }),
  payment: z.enum(["ZAAD", "EVC"], {
    required_error: "Please choose the correct payment option"
  }),
  amount: z.coerce.number({
    invalid_type_error: "Only digits are allowed"
  })
  .int()
  .gte(3, { message: "Minimum withdrawal limit is 3 USD"})
  .lte(1000, {message: "Maxmium withdraw limit is 1000 USD"})
})


const defaultValues: Partial<z.infer<typeof FormSchema>> = {
  money: "Bitcoin"
}

export function MainForm() {
  const { tab, setTab } = useContext(ActiveTabContext)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const baseClass = `w-full sm:w-2/3 sm:space-y-6 p-4 border-2 rounded-md m-4 sm:m-8`;
  const transitionClass = tab === 'sell' ? 'border-r-teal-200/60 dark:border-r-teal-200/30 transition-all duration-300 ease-in-out' : 'border-l-teal-200/60 dark:border-l-teal-200/30 transition-all duration-300 ease-in-out'

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${baseClass} ${transitionClass}`}>
        <div className="flex w-full items-center justify-center sm:hidden">
          <MarketMode />
        </div>
        <div className="grid sm:grid-cols-2 gap-5 my-5">
        <FormField
          control={form.control}
          name="money"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sm:w-100">{tab == "buy" ? 'Buy' : 'Sell'}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Buy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Bitcoin">
                    <div className="inline-flex items-center">
                      <FaBitcoin className="mr-2" />
                      Bitcoin
                    </div>
                  </SelectItem>
                  <SelectItem value="1xbet">
                    <div className="inline-flex items-center">
                      <Xbet className='rounded-full h-3.5 w-3.5 mr-2'/>
                      1xbet
                    </div>
                  </SelectItem>
                  <SelectItem value="Perfect money">
                    <div className="inline-flex items-center">
                      <Pm className="mr-2" />
                      Perfect money
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                1 BTC = {" "}
                <span className="text-blue-600 inline-flex items-center space-x-2">26,000&nbsp;<FaChartLine /></span>
              </FormDescription>
              <FormMessage />
            </FormItem>

          )}
        />

        <FormField
          control={form.control}
          name="payment"
          render={ ({ field }) => (
            <FormItem>
              <FormLabel className="sm:w-100"> Pay with </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger >
                    <SelectValue placeholder="Choose Payment Method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ZAAD">
                    <div className="inline-flex items-center">
                    <Zaad className="h-[17px] w-[17px] mr-1.5"/>
                    Zaad
                    </div>
                    </SelectItem>
                  <SelectItem value="EVC">
                    <div className="inline-flex items-center">
                      <Evc className="h-[18px] w-[18px] mr-1.5"/>
                      Evc
                    </div></SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                The payment method you want
              </FormDescription>
              <FormMessage />
            </FormItem>
        )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field}) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <Input className="text-base sm:text-sm" placeholder="Enter amount" {...field} />
              <FormDescription>
                Minimum: <span className="font-semibold shadow-sm">3 USD</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <Button type="submit" className="mx-auto w-full sm:w-2/3 flex items-center justify-center md:flex-none md:mx-0 md:w-28 md:items-start md:justify-center">Submit</Button>
      </form>
    </Form>
  )
}
